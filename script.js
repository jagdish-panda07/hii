document.addEventListener('DOMContentLoaded', () => {
    const moodButtons = document.querySelectorAll('.mood-button');
    const recommendationsDiv = document.getElementById('recommendations');
    const movieList = document.getElementById('movie-list');
    const seriesList = document.getElementById('series-list');
    const animeList = document.getElementById('anime-list');
    const musicList = document.getElementById('music-list');

    const recommendationsData = {
        happy: {
            movies: ["Paddington 2", "Amelie", "School of Rock"],
            series: ["Parks and Recreation", "The Good Place", "Brooklyn Nine-Nine"],
            anime: ["Kiki's Delivery Service", "Aggretsuko", "Barakamon"],
            music: ["Uptown Funk - Mark Ronson ft. Bruno Mars", "Walking on Sunshine - Katrina & The Waves", "Lovely Day - Bill Withers"]
        },
        sad: {
            movies: ["Eternal Sunshine of the Spotless Mind", "Call Me By Your Name", "Lost in Translation"],
            series: ["After Life", "This Is Us", "Fleabag"],
            anime: ["Your Lie in April", "Clannad: After Story", "Violet Evergarden"],
            music: ["Hallelujah - Leonard Cohen", "Someone Like You - Adele", "The Sound of Silence - Simon & Garfunkel"]
        },
        excited: {
            movies: ["Mad Max: Fury Road", "Spider-Man: Into the Spider-Verse", "Inception"],
            series: ["Attack on Titan", "Money Heist", "The Queen's Gambit"],
            anime: ["One Punch Man", "My Hero Academia", "Jujutsu Kaisen"],
            music: ["Don't Stop Me Now - Queen", "Eye of the Tiger - Survivor", "Levels - Avicii"]
        },
        relaxed: {
            movies: ["Lost in Translation", "Before Sunrise", "Drive My Car"],
            series: ["Midnight Diner: Tokyo Stories", "Chef's Table", "Planet Earth"],
            anime: ["Mushishi", "Natsume's Book of Friends", "Yuru Camp"],
            music: ["Weightless (Ambient Transmission Vol. 2) - Marconi Union", "Clair de Lune - Claude Debussy", "Watermark - Enya"]
        },
        energetic: {
            movies: ["Baby Driver", "Scott Pilgrim vs. the World", "Everything Everywhere All at Once"],
            series: ["Peacemaker", "Cobra Kai", "Russian Doll"],
            anime: ["Gurren Lagann", "Kill la Kill", "Cowboy Bebop"],
            music: ["September - Earth, Wind & Fire", "Can't Stop - Red Hot Chili Peppers", "Good Vibrations - The Beach Boys"]
        },
        calm: {
            movies: ["My Neighbor Totoro", "Little Forest", "Pastoral: To Die in the Country"],
            series: ["Great British Baking Show", "Terrace House", "Gentle Giant Octopus"],
            anime: ["Flying Witch", "Yokohama Kaidashi Kikou", "Aria the Animation"],
            music: ["Gymnopédie No. 1 - Erik Satie", "River Flows in You - Yiruma", "Ave Maria - Franz Schubert"]
        }
    };

    moodButtons.forEach(button => {
        button.addEventListener('click', function() {
            const mood = this.dataset.mood;
            const recommendations = recommendationsData[mood];

            if (recommendations) {
                movieList.innerHTML = recommendations.movies.map(item => `<li>${item}</li>`).join('');
                seriesList.innerHTML = recommendations.series.map(item => `<li>${item}</li>`).join('');
                animeList.innerHTML = recommendations.anime.map(item => `<li>${item}</li>`).join('');
                musicList.innerHTML = recommendations.music.map(item => `<li>${item}</li>`).join('');
                recommendationsDiv.classList.remove('hidden');
            } else {
                recommendationsDiv.classList.add('hidden');
                alert("No recommendations found for this mood.");
            }
        });
    });
});