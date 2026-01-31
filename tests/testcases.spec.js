const { test, expect } = require('@playwright/test');

const scenarios = [
    { id: 'Pos_Fun_0001', input: 'aayuboovan! Mata adha office yanna epaa kiyalaa ammaa kivvaa, mokadha iiyee mata maara oluve kaekkumak thibuna nisaa. Ehema uNath mama vaeda karanna onee kiyala hithuvaa, mokadha duties tika ivara karanna thiyenavaa. Ammaa kiyanne sauKYA iita vadaa lokuyi kiyalaa. Oyaa hithanne mama mokak kaLoth hoDHayi kiyaladha?', 
        expected: 'ආයුබෝවන්! මට අද office යන්න එපා කියලා අම්මා කිව්වා, මොකද ඊයේ මට මාර ඔලුවෙ කැක්කුමක් තිබුන නිසා. එහෙම උණත් මම වැඩ කරන්න ඔනේ කියල හිතුවා, මොකද duties ටික ඉවර කරන්න තියෙනවා. අම්මා කියන්නෙ සෞඛ්‍ය ඊට වඩා ලොකුයි කියලා. ඔයා හිතන්නෙ මම මොකක් කළොත් හොඳයි කියලද?' },

    { id: 'Pos_Fun_0002', input: 'mama dhaen gedhara innee magee ammaa thaaththaa ekka. mama udhee idhalaa vaeda karalaa, passe bath kanavaa. kaalaa podi nindhak dhaanna hithanavaa. magee hithata hari sathutak enavaa gedhara innakota. mama kaemathi dhigatama gedhara inna. magee prashna godak aduyi gedhara idhdhi. Oyaata onee nam enna apee gedhara. ammaa rasata kaemath hadhala thiyenavaa.', 
        expected: 'මම දැන් ගෙදර ඉන්නේ මගේ අම්මා තාත්තා එක්ක. මම උදේ ඉදලා වැඩ කරලා, පස්සෙ බත් කනවා. කාලා පොඩි නින්දක් දාන්න හිතනවා. මගේ හිතට හරි සතුටක් එනවා ගෙදර ඉන්නකොට. මම කැමති දිගටම ගෙදර ඉන්න. මගේ ප්‍රශ්න ගොඩක් අඩුයි ගෙදර ඉද්දි. ඔයාට ඔනේ නම් එන්න අපේ ගෙදර. අම්මා රසට කැමත් හදල තියෙනවා.' },
    
    { id: 'Pos_Fun_0003', input: 'mama dhaen uni vaeda tika ivara karalaa gedhara innakota mata maara sathutuyi. udhee lecture ekayi labs dhekakuyi thibuna nisaa dhavasema hari amaaruyi, eeth yaaluvo ekka kathaa karala kaalaya giyaama loku stress eka adu venavaa. ehema nisaa mama hithanavaa uni life eka amaaru unath ehema experiences thiyennee hoDHatama kiyalaa. oyaata free velaavak thiyenavaa nam apee gedhara enna, api assignments gaena poddak kathaa karamu.', 
        expected: 'මම දැන් uni වැඩ ටික ඉවර කරලා ගෙදර ඉන්නකොට මට මාර සතුටුයි. උදේ lecture එකයි labs දෙකකුයි තිබුන නිසා දවසෙම හරි අමාරුයි, ඒත් යාලුවො එක්ක කතා කරල කාලය ගියාම ලොකු stress එක අඩු වෙනවා. එහෙම නිසා මම හිතනවා uni life එක අමාරු උනත් එහෙම experiences තියෙන්නේ හොඳටම කියලා. ඔයාට free වෙලාවක් තියෙනවා නම් අපේ ගෙදර එන්න, අපි assignments ගැන පොඩ්ඩක් කතා කරමු.' },

    { id: 'Pos_Fun_0004', input: 'Madam, mata heta cricket practice thiyenavaa. eeka nisaa heta thiyenna thiyena language viBhaagayee paper eka badhaadhaa udhee dhenna puluvan veidha? loku udhavvak. mama anivaaren edhaata enavaa kiyala sure mata. anee eeka nisaa mee avasthaavee vitharak mata chance ekak dhennako madam. labana sathiyee tournament ekak thiyenavaa, eeka nisaa practice nogihin innath baehae madam.', 
        expected: 'Madam, මට හෙට cricket practice තියෙනවා. ඒක නිසා හෙට තියෙන්න තියෙන language විභාගයේ paper එක බදාදා උදේ දෙන්න පුලුවන් වේද? ලොකු උදව්වක්. මම අනිවාරෙන් එදාට එනවා කියල sure මට. අනේ ඒක නිසා මේ අවස්තාවේ විතරක් මට chance එකක් දෙන්නකො madam. ලබන සතියේ tournament එකක් තියෙනවා, ඒක නිසා practice නොගිහින් ඉන්නත් බැහැ madam.' },

    { id: 'Pos_Fun_0005', input: 'Hey oyaata puluvandha maedamgen ahanna mata anidhdhaa thiyena exam eka sikuraadhaa liyanna puluvandha kiyalaa? mata heta wedding ekak thiyenavaa. naeedhaee vena akkaa kenek nisaa anivaaren yanna onee. anee oyaata adha madam hamba unoth kohoma hari ahalaa mata kiyannako. bohoma sthuthii puluvan nam. maedam kivvoth formal request ekak dhaanna onee kiyala mata poddak kiyanna adhama.', 
        expected: 'Hey ඔයාට පුලුවන්ද මැඩම්ගෙන් අහන්න මට අනිද්දා තියෙන exam එක සිකුරාදා ලියන්න පුලුවන්ද කියලා? මට හෙට wedding එකක් තියෙනවා. නෑදෑ වෙන අක්කා කෙනෙක් නිසා අනිවාරෙන් යන්න ඔනේ. අනේ ඔයාට අද madam හම්බ උනොත් කොහොම හරි අහලා මට කියන්නකො. බොහොම ස්තුතී පුලුවන් නම්. මැඩම් කිව්වොත් formal request එකක් දාන්න ඔනේ කියල මට පොඩ්ඩක් කියන්න අදම.' },
    
    { id: 'Pos_Fun_0006', input: 'oyaata puluvan veidha 10 venidhata kalin assignment eka ivara karanna? passe submit kaloth 5% adu venavaa grade eken. aparaadhee nee ehema nikam adu karagannee. kohoma hari 9 venidhaa raee 11.59 vedhdhi ooka submit karanna puluvan unoth oyaatama hoDHAyi. man dannava oyaa prashneka innee kiyalaa eeth kohoma hari karanna! passee api nidhahasee prashnee gaena kathaa karamu.', 
        expected: 'ඔයාට පුලුවන් වේද 10 වෙනිදට කලින් assignment එක ඉවර කරන්න? පස්සෙ submit කලොත් 5% අඩු වෙනවා grade එකෙන්. අපරාදේ නේ එහෙම නිකම් අඩු කරගන්නේ. කොහොම හරි 9 වෙනිදා රෑ 11.59 වෙද්දි ඕක submit කරන්න පුලුවන් උනොත් ඔයාටම හොඳයි. man ඩන්නව ඔයා ප්‍රශ්නෙක ඉන්නේ කියලා ඒත් කොහොම හරි කරන්න! පස්සේ අපි නිදහසේ ප්‍රශ්නේ ගැන කතා කරමු.' },

    { id: 'Pos_Fun_0007', input: 'mama iiyee dhavasa puraama kolaBA vatee gihin vaeda karalaa hari mahansii. passe gedhara aavata passee mata kaema kannavath hithune naehae. gedhara edhdhii ammaa bath hadhala thibba. ithin eeka dhaekka gaman magee hitha hari sathuta unaa. ehema innakota magee prashna tika podi podi vidhihata adu venavaa kiyalaa mata hoDHatama theerenavaa.', 
        expected: 'මම ඊයේ දවස පුරාම කොලඹ වටේ ගිහින් වැඩ කරලා හරි මහන්සී. පස්සෙ ගෙදර ආවට පස්සේ මට කැම කන්නවත් හිතුනෙ නැහැ. ගෙදර එද්දී අම්මා බත් හදල තිබ්බ. ඉතින් ඒක දැක්ක ගමන් මගේ හිත හරි සතුට උනා. එහෙම ඉන්නකොට මගේ ප්‍රශ්න ටික පොඩි පොඩි විදිහට අඩු වෙනවා කියලා මට හොඳටම තේරෙනවා.' },

    { id: 'Pos_Fun_0008', input: 'mama pahalata  yanavaa.', 
        expected: 'මම පහලට  යනවා.' },

    { id: 'Pos_Fun_0009', input: 'thaaththaa heta gedhara enavaa kivvaa.', 
        expected: 'තාත්තා හෙට ගෙදර එනවා කිව්වා.' },

    { id: 'Pos_Fun_0010', input: 'sanudhi chithrayak aDHinavaa.', 
        expected: 'සනුදි චිත්‍රයක් අඳිනවා.' },

    { id: 'Pos_Fun_0011', input: 'mama dhaenma kanna yanne naehae. thava tikakin yanavaa.', 
        expected: 'මම දැන්ම කන්න යන්නෙ නැහැ. තව ටිකකින් යනවා.' },

    { id: 'Pos_Fun_0012', input: 'mata 5kg baasmathii haal gooni ekakuyi 10kg kaekulu haal gooni ekakuyi dhennakoo mudhalaali.', 
        expected: 'මට 5kg බාස්මතී හාල් ගෝනි එකකුයි 10kg කැකුලු හාල් ගෝනි එකකුයි දෙන්නකෝ මුදලාලි.' },

    { id: 'Pos_Fun_0013', input: 'mama hithannee daen godak kaalayak thisse US dollar eka SL rupees 300ta vadaa vaediyi. eeka nisaa tikak parissamin balalaa karanna online order karadhdhi. ', 
        expected: 'මම හිතන්නේ ඩැන් ගොඩක් කාලයක් තිස්සෙ US dollar එක SL rupees 300ට වඩා වැඩියි. ඒක නිසා ටිකක් පරිස්සමින් බලලා කරන්න online order කරද්දි.' },

    { id: 'Pos_Fun_0014', input: 'api heta nethmi ekka palli gihillaa, tika velaavakata veralatath gihillaa iDHAlaa thamayi ennee.', 
        expected: 'අපි හෙට නෙත්මි එක්ක පල්ලි ගිහිල්ලා, ටික වෙලාවකට වෙරලටත් ගිහිල්ලා ඉඳලා තමයි එන්නේ.' },

    { id: 'Pos_Fun_0015', input: 'maedam, adha dhavasee udhee thibunu dhaedi maarga thadhabadhaya nisaa mama kaaryaalayata paemineddii 08.45 pamana vii thibuni. mae avasthavee pamanak obagen maa hata samaava laebeevi kiyaa mama sithannemi.', 
        expected: 'මැඩම්, අද දවසේ උදේ තිබුනු දැඩි මාර්ග තදබදය නිසා මම කාර්යාලයට පැමිනෙඩ්ඩී 08.45 පමන වී තිබුනි. මැ අවස්තවේ පමනක් ඔබගෙන් මා හට සමාව ලැබේවි කියා මම සිතන්නෙමි.' },

    { id: 'Pos_Fun_0016', input: 'oyaa kivvaa hari thamayi, mee paata lassanayi kalin balapu paatata vadaa.', 
        expected: 'ඔයා කිව්වා හරි තමයි, මේ පාට ලස්සනයි කලින් බලපු පාටට වඩා.' },

    { id: 'Pos_Fun_0017', input: 'ov mama iiye potha kiyavalaa ivara kalaa, heta eeka aran ennam.', 
        expected: 'ඔව් මම ඊයෙ පොත කියවලා ඉවර කලා, හෙට ඒක අරන් එන්නම්.' },


    { id: 'Pos_Fun_0018', input: 'mata eeka podda podda thamayi theerunee, aayeth kiyavalaa balanna onee.', 
        expected: 'මට ඒක පොඩ්ඩ පොඩ්ඩ තමයි තේරුනේ, ආයෙත් කියවලා බලන්න ඔනේ.' },

    { id: 'Pos_Fun_0019', input: 'eeka thiyenne dhesaembar 25, eyaalaa kivva vidhiyata.', 
        expected: 'ඒක තියෙන්නෙ දෙසැම්බර් 25, එයාලා කිව්ව විදියට.' },

    { id: 'Pos_Fun_0020', input: 'oyaa maath ekka enavaadha pansal yanna?', 
        expected: 'ඔයා මාත් එක්ක එනවාද පන්සල් යන්න?' },

    { id: 'Pos_Fun_0021', input: 'Oya eeye thibuna zoom meeting ekata giyaadha?', 
        expected: 'ඔය ඒයෙ තිබුන zoom meeting එකට ගියාද?' },

    { id: 'Pos_Fun_0022', input: 'Mama maedamgen ahala balanna oonee.', 
        expected: 'මම මැඩම්ගෙන් අහල බලන්න ඕනේ.' },

    { id: 'Pos_Fun_0023', input: 'poddak inna, mama dhaen enavaa.', 
        expected: 'පොඩ්ඩක් ඉන්න, මම දැන් එනවා.' },

    { id: 'Pos_Fun_0024', input: 'mata kammaeli hithunaa campus enna.', 
        expected: 'මට කම්මැලි හිතුනා campus එන්න.' },

    { id: 'Pos_Fun_0025', input: 'ov mama paeya dhekakin enavaa.', 
        expected: 'ඔව් මම පැය දෙකකින් එනවා.' },

    { id: 'Pos_Fun_0026', input: 'aayee nam mama eyaata udhav karannee naehae.', 
        expected: 'ආයේ නම් මම එයාට උදව් කරන්නේ නැහැ.' },
    
    { id: 'Pos_Fun_0027', input: 'mama iiye plan karalaa, heta trip ekata yanavaa.', 
        expected: 'මම ඊයෙ plan කරලා, හෙට trip එකට යනවා.' },
    
    { id: 'Pos_Fun_0028', input: 'heta vahaama enna udhee 10.00 venna kalin.', 
        expected: 'හෙට වහාම එන්න උදේ 10.00 වෙන්න කලින්.' },






    { id: 'Neg_Fun_0001', input: 'haloo oyaata puluvan nam mata udavvak karannakoo. magee sudhu paata sapaththu dhekee monvaa hari saayam monavaa hari gaeevilaa dhaen mata eeka heta dhaagena yanna baehae. sudhdha kalaa eeth mama hithanne naee heta vedhddi veelilaa thiyeevi kiyalaa. anee puluvan nam mata oyaage dheka hetata vitharak dhennakoo. lokuu udhavvak.', 
        expected: 'හලෝ ඔයාට පුලුවන් නම් මට උදව්වක් කරන්නකෝ. මගේ සුදු පාට සපත්තු දෙකේ මොනවා හරි සායම් මොනවා හරි ගෑවිලා දැන් මට ඒක හෙට දාගෙන යන්න බැහැ. සුද්ද කලා ඒත් මම හිතන්නෙ නෑ හෙට වෙද්දි වේලිලා තියේවි කියලා. අනේ පුලුවන් නම් මට ඔයාගෙ දෙක හෙටට විතරක් දෙන්නකෝ. ලොකූ උදව්වක්.' }, //vedhdhi, udhavvak

    { id: 'Neg_Fun_0002', input: 'nethmi mata eyaagee NIC ekee pinthuurayakuyi anith onee kivvavistharayi okkoma SMS ekakin evalaa thibunaa. inna mama oyaata ee tika dhaenma evannam naethnam mata ooka amathaka venavaa. oyaa ee tika balalaa hari nam thaepael kanthooruvata genihin dhennakoo. thava monavaa hari adupaaduvak thiyenavaa nam mata whatsapp msg ekak evanna.',
         expected: 'නෙත්මි මට එයාගේ NIC එකේ පින්තූරයකුයි අනිත් ඔනේ කිව්වවිස්තරයි ඔක්කොම SMS එකකින් එවලා තිබුනා. ඉන්න මම ඔයාට ඒ ටික දැන්ම එවන්නම් නැත්නම් මට ඕක අමතක වෙනවා. ඔයා ඒ ටික බලලා හරි නම් තැපැල් කන්තෝරුවට ගෙනිහින් දෙන්නකෝ. තව මොනවා හරි අඩුපාඩුවක් තියෙනවා නම් මට whatsapp text එකක් එවන්න.' },//msg/text change
    
    { id: 'Neg_Fun_0003', input: 'mamagedharayanavaa heta udhee.', 
        expected: 'මම ගෙදර යනවා හෙට උදේ.' }, //words unexpectedly merged

    { id: 'Neg_Fun_0004', input: 'karuNaakaralaaaa meeka poddak balannako', 
        expected: 'කරුණාකරලා මේක පොඩ්ඩක් බලන්නකෝ' }, //too much letters put in the first word

    { id: 'Neg_Fun_0005', input: 'mamagedharainnee අද හවස', 
        expected: 'මම ගෙදර ඉන්නේ අද හවස' },//merged words

    { id: 'Neg_Fun_0006', input: 'oyaata kohomadha adha', 
        expected: 'ඔයාට කොහොමද අද?' }, //words merged

    { id: 'Neg_Fun_0007', input: 'senumiadhapanthi yanavaa', 
        expected: 'සෙනුමි අද පන්ති යනවා' }, //words merged

    { id: 'Neg_Fun_0008', input: 'oyaa hodhininnavaa nedha?', 
        expected: 'ඔයා හොදින් ඉන්නවා නේද?' },//words merged

    { id: 'Neg_Fun_0009', input: 'mama ada uni giyaaa', 
        expected: 'මම අද uni ගියා' },//too many 'a' letters in the end

    { id: 'Neg_Fun_0010', input: 'Aayubovan teacher', 
        expected: 'අයුබොවන් teacher!' },//exclamation is missing

];

test.describe('Singlish Translation Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/', { 
            waitUntil: 'load', 
            timeout: 60000 
        });
    });

    for (const data of scenarios) {
        test(`Testing ${data.id} - ${data.input}`, async ({ page }) => {
            const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
            
            await page.waitForTimeout(2000);
            await inputField.fill(''); 
            await inputField.fill(data.input); 

            await page.waitForTimeout(10000); 

            const outputField = page.locator('.card').filter({ hasText: 'Sinhala' }).locator('div.whitespace-pre-wrap');
            const actualText = (await outputField.innerText()).trim();

            console.log(`Test ID: ${data.id} | Input: ${data.input} | Expected: ${data.expected} | Actual: ${actualText}`);

            expect(actualText).toBe(data.expected);
        });
    }
});