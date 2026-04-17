const fs = require('fs');

console.log('Checking heroRelationsComplete.ts for issues...\n');

const content = fs.readFileSync('src/data/heroRelationsComplete.ts', 'utf-8');
const jsonMatch = content.match(/export const heroRelations: HeroRelation\[\] = \[([\s\S]*?)\];/);
if (!jsonMatch) {
  console.error('Could not parse data');
  process.exit(1);
}

const oldJsonStr = '[' + jsonMatch[1] + ']';
const relations = eval(oldJsonStr);

// 检查问题
console.log('=== Heroes with empty counters ===');
const emptyCounters = relations.filter(r => !r.counters.heroes || r.counters.heroes.length === 0);
emptyCounters.forEach(r => console.log(`- ${r.heroName}`));

console.log('\n=== Heroes with only 1 counter hero ===');
const oneCounter = relations.filter(r => r.counters.heroes && r.counters.heroes.length === 1);
oneCounter.forEach(r => console.log(`- ${r.heroName}: [${r.counters.heroes.join(', ')}]`));

console.log('\n=== Heroes with bestPartners.reasons empty ===');
const emptyBestPartnersReasons = relations.filter(r => !r.bestPartners.reasons || r.bestPartners.reasons.length === 0);
emptyBestPartnersReasons.forEach(r => console.log(`- ${r.heroName}`));

console.log('\n=== Heroes with counteredBy.reasons empty ===');
const emptyCounteredByReasons = relations.filter(r => !r.counteredBy.reasons || r.counteredBy.reasons.length === 0);
emptyCounteredByReasons.forEach(r => console.log(`- ${r.heroName}`));

console.log(`\nSummary:`);
console.log(`Total heroes: ${relations.length}`);
console.log(`Empty counters: ${emptyCounters.length}`);
console.log(`One counter: ${oneCounter.length}`);
console.log(`Empty bestPartners reasons: ${emptyBestPartnersReasons.length}`);
console.log(`Empty counteredBy reasons: ${emptyCounteredByReasons.length}`);
