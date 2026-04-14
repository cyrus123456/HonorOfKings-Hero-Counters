import { heroes, type Hero, type HeroId, type HeroRole } from '@/data/heroData';
import type { Language } from '@/i18n';
import { useCallback, useMemo } from 'react';

export function useMemoizedHeroes() {
  const heroMap = useMemo(() => {
    const map = new Map<HeroId, Hero>();
    for (const hero of heroes) {
      map.set(hero.id, hero);
    }
    return map;
  }, []);

  const getHero = useCallback((id: string): Hero | undefined => heroMap.get(id as HeroId), [heroMap]);

  const getHeroName = useCallback((heroId: string, language: Language): string => {
    const hero = heroMap.get(heroId as HeroId);
    if (!hero) return '';
    return language === 'zh' ? hero.name : hero.nameEn;
  }, [heroMap]);

  return { heroes, heroMap, getHero, getHeroName };
}

/** 分路排序权重（预定义常量，避免每次渲染重新创建） */
export const ROLE_ORDER: Record<HeroRole, number> = Object.freeze({
  tank: 0,
  fighter: 1,
  assassin: 2,
  mage: 3,
  marksman: 4,
  support: 5,
});

/**
 * 预计算的角色排序函数（稳定排序）
 */
export function sortByRole<T extends { role: HeroRole[] }>(items: T[]): T[] {
  return [...items].sort((a, b) => ROLE_ORDER[a.role[0]] - ROLE_ORDER[b.role[0]]);
}
