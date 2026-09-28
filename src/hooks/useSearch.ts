import { useState, useMemo, useEffect } from 'react';
import { Lesson } from '../types';
import lessonsData from '../data/lessons.json';
import { normalizeArabicText } from '../lib/utils';
import { trackEvent } from '../lib/analytics';

const allLessons = lessonsData as Lesson[];

export function useSearch(initialQuery: string = '', initialTerm: string = 'all', initialUnit: string = 'all') {
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);
  const [selectedTerm, setSelectedTerm] = useState(initialTerm);
  const [selectedUnit, setSelectedUnit] = useState(initialUnit);

  // Debounce search query by 250ms
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 250);
    return () => clearTimeout(handler);
  }, [query]);

  // Extract available unique units
  const availableUnits = useMemo(() => {
    const units = new Set<string>();
    allLessons.forEach((lesson) => {
      if (selectedTerm === 'all' || lesson.termSlug === selectedTerm || lesson.term === selectedTerm) {
        units.add(lesson.unit);
      }
    });
    return Array.from(units);
  }, [selectedTerm]);

  // Filter lessons
  const filteredLessons = useMemo(() => {
    const normalizedQuery = normalizeArabicText(debouncedQuery);

    return allLessons.filter((lesson) => {
      // Term filter
      if (selectedTerm !== 'all') {
        const matchesTerm = lesson.termSlug === selectedTerm || lesson.term === selectedTerm;
        if (!matchesTerm) return false;
      }

      // Unit filter
      if (selectedUnit !== 'all' && lesson.unit !== selectedUnit) {
        return false;
      }

      // Query filter
      if (!normalizedQuery) return true;

      const searchableText = normalizeArabicText(
        `${lesson.title} ${lesson.description} ${lesson.unit} ${lesson.lesson} ${lesson.term} ${lesson.grade}`
      );

      return searchableText.includes(normalizedQuery);
    });
  }, [debouncedQuery, selectedTerm, selectedUnit]);

  // Track search event when debounced query is typed
  useEffect(() => {
    if (debouncedQuery.trim().length > 1) {
      trackEvent({
        action: 'search',
        search_term: debouncedQuery.trim(),
        results_count: filteredLessons.length,
      });
    }
  }, [debouncedQuery, filteredLessons.length]);

  return {
    query,
    setQuery,
    debouncedQuery,
    selectedTerm,
    setSelectedTerm,
    selectedUnit,
    setSelectedUnit,
    availableUnits,
    filteredLessons,
    totalCount: allLessons.length,
  };
}
