const { chromium } = require('playwright');
const fs = require('fs');

async function rescrapeHeroes() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const heroesToRescrape = [
    { name: '廉颇', url: 'https://pvp.qq.com/web201605/herodetail/105.shtml' },
    { name: '猪八戒', url: 'https://pvp.qq.com/web201605/herodetail/511.shtml' },
    { name: '阿轲', url: 'https://pvp.qq.com/web201605/herodetail/116.shtml' },
    { name: '梦奇', url: 'https://pvp.qq.com/web201605/herodetail/198.shtml' },
    { name: '夏洛特', url: 'https://pvp.qq.com/web201605/herodetail/536.shtml' },
    { name: '桑启', url: 'https://pvp.qq.com/web201605/herodetail/534.shtml' },
    { name: '铠', url: 'https://pvp.qq.com/web201605/herodetail/193.shtml' }
  ];
  
  const results = [];
  
  for (const hero of heroesToRescrape) {
    console.log(`\nProcessing: ${hero.name}`);
    
    try {
      await page.goto(hero.url);
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);
      
      const counterData = await page.evaluate(() => {
        const result = {
          counterHeroes: [],
          counterReasons: [],
          counterCodes: []
        };
        
        const heroInfoBox = document.querySelector('.hero-info-box');
        if (!heroInfoBox) {
          console.log('No hero info box found');
          return result;
        }
        
        const heroInfos = heroInfoBox.querySelectorAll('.hero-info.l.info');
        
        if (heroInfos.length >= 2) {
          const counterSection = heroInfos[1];
          
          const links = counterSection.querySelectorAll('a[href*="shtml"]');
          links.forEach(link => {
            const href = link.getAttribute('href');
            if (href) {
              const match = href.match(/(\d+)\.shtml/);
              if (match) {
                result.counterCodes.push(match[1]);
              }
            }
          });
          
          const descDiv = counterSection.querySelector('.hero-list-desc');
          if (descDiv) {
            const ps = descDiv.querySelectorAll('p');
            ps.forEach(p => {
              const text = p.textContent.trim();
              if (text && text.length > 10) {
                result.counterReasons.push(text);
              }
            });
          }
        }
        
        // 同时获取bestPartners和counteredBy的reasons
        const extraResult = {
          bestPartnersReasons: [],
          counteredByReasons: []
        };
        
        if (heroInfos.length >= 1) {
          const bestPartnersSection = heroInfos[0];
          const descDiv = bestPartnersSection.querySelector('.hero-list-desc');
          if (descDiv) {
            const ps = descDiv.querySelectorAll('p');
            ps.forEach(p => {
              const text = p.textContent.trim();
              if (text && text.length > 10) {
                extraResult.bestPartnersReasons.push(text);
              }
            });
          }
        }
        
        if (heroInfos.length >= 3) {
          const counteredBySection = heroInfos[2];
          const descDiv = counteredBySection.querySelector('.hero-list-desc');
          if (descDiv) {
            const ps = descDiv.querySelectorAll('p');
            ps.forEach(p => {
              const text = p.textContent.trim();
              if (text && text.length > 10) {
                extraResult.counteredByReasons.push(text);
              }
            });
          }
        }
        
        return { ...result, ...extraResult };
      });
      
      results.push({
        heroName: hero.name,
        heroUrl: hero.url,
        counterCodes: counterData.counterCodes || [],
        counterReasons: counterData.counterReasons || [],
        bestPartnersReasons: counterData.bestPartnersReasons || [],
        counteredByReasons: counterData.counteredByReasons || []
      });
      
      console.log(`  Counter codes: ${counterData.counterCodes.join(', ')}`);
      console.log(`  Counter reasons:`, counterData.counterReasons);
      console.log(`  Best partners reasons:`, counterData.bestPartnersReasons);
      console.log(`  Countered by reasons:`, counterData.counteredByReasons);
      
    } catch (error) {
      console.error(`  Error:`, error.message);
    }
  }
  
  console.log('\nSaving results...');
  fs.writeFileSync('rescraped-heroes.json', JSON.stringify(results, null, 2), 'utf-8');
  
  await browser.close();
}

rescrapeHeroes().catch(console.error);
