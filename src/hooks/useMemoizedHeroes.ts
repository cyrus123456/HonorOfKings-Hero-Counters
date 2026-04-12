import { useCallback, useMemo } from 'react';
import { heroes, type Hero } from '@/data/heroData';

export function useMemoizedHeroes() {
  const heroMap = useMemo(() => {
    const map = new Map<string, Hero>();
    for (const hero of heroes) {
      map.set(hero.id, hero);
    }
    return map;
  }, []);

  const getHero = useCallback((id: string): Hero | undefined => heroMap.get(id), [heroMap]);

  const getHeroName = useCallback((heroId: string, language: string): string => {
    const hero = heroMap.get(heroId);
    if (!hero) return '';
    return language === 'zh' ? hero.name : hero.nameEn;
  }, [heroMap]);

  return { heroes, heroMap, getHero, getHeroName };
}

/** 分路排序权重（预定义常量，避免每次渲染重新创建） */
export const ROLE_ORDER: Record<string, number> = Object.freeze({
  toplane: 0,
  mage: 1,
  jungle: 2,
  adc: 3,
  support: 4,
});

/**
 * 预计算的角色排序函数（稳定排序）
 */
export function sortByRole<T extends { role: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => ROLE_ORDER[a.role] - ROLE_ORDER[b.role]);
}
