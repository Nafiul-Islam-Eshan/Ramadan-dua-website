const duas = [
    {
        duaTitle: "Dua of Suplication",
        arabic: " اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ العَفْوَ فَاعْفُ عَنِّي",
        english: "O Allah, You are the Most Forgiving, You love forgiveness, so forgive me.",
    },
    {
        duaTitle: "Dua for Mercy",
        arabic: "رَبَّنَا آتِنَا مِنْ لَدُنْكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدً",
        english: "Our Lord, grant us from Yourself mercy and prepare for us from our affair, right guidance.",
    },
    {
        duaTitle: "Dua for Forgiveness",
        arabic:  "لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدَ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. سُبْحَانَ اللهِ، وَالْحَمْدُ للهِ، ولَا إِلَهَ إِلَّا اللهُ، وَاللهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ العَلِيِّ الْعَظيِمِ، ربِّ اغْفِرلِي",
        english: "There is none worth of worship but Allah alone, Who has no partner, His is the dominion and to Him belongs all praise, and He is able to do all things. Glory is to Allah. Praise is to Allah. There is none worth of worship but Allah. Allah is the Most Great. There is no might and no power except by Allah’s leave, the Exalted, the Mighty. My Lord, forgive me."
    },
    {
        duaTitle: "Dua for Breaking Fast",
        arabic: "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ",
        english: "The thirst has gone, the veins have been moistened, and the reward is confirmed if Allah wills.",
    },
    {
        duaTitle: "Dua for Guidance",
        arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ",
        english: "Our Lord, do not let our hearts deviate after You have guided us, and bestow upon us mercy from Yourself. Indeed, You are the Bestower.",
    },
]

let currentIndex = 0;

function showDua(index) {

    const dua = duas[index];
    document.getElementById("duaTitle").textContent = dua.duaTitle;
    document.getElementById("duaArabic").textContent = dua.arabic;
    document.getElementById("duaEnglish").textContent = dua.english;
}

function fadeIn() {
    const duaCard = document.getElementById("duaCard");
    duaCard.classList.remove("fade-in");
    void duaCard.offsetWidth;
    duaCard.classList.add("fade-in");
}

document.getElementById("previous").addEventListener("click", function(){
    if (currentIndex > 0) {
        currentIndex--;
        showDua(currentIndex);
        fadeIn();
    }
});

document.getElementById("next").addEventListener("click", function(){
    if (currentIndex < duas.length - 1) {
        currentIndex++;
        showDua(currentIndex);
        fadeIn();
    }
});

showDua(currentIndex);
fadeIn();










