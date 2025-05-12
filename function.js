// Game state
let gameState = {
  queens: [],
  currentEpisode: 1,
  currentChallenge: null,
  currentRunway: null,
  isRunwayChallenge: false,
  performances: [],
  placements: {},
  bottomQueens: [],
  lipsynQueen1: null,
  lipsynQueen2: null,
  eliminatedQueens: [],
  winner: null,
  relationships: {}, // Store queen relationships
  // Add this new property to track episode-by-episode performance
  episodePerformances: {}, // Will store each queen's performance by episode
  // Finale state
  finaleQueens: [],
  finalePairs: [],
  finaleRound: 0,
  currentFinalePair: 0,
}

// Default queen images
const defaultQueenImages = ["Screen.png"]

// Challenge descriptions
const challenges = [
  // 🎭 Performance & Comedy Challenges
  "Snatch Game",
  "Rusical",
  "Acting Challenge",
  "Improv Challenge",
  "Stand-Up Comedy",
  "Roast",
  "Lip Sync Challenge",

  // 🎤 Music & Dance Challenges
  "Girl Group Challenge",
  "Talent Show",
  "Rumix Challenge",
  "Choreography Challenge",
  "Singing Challenge",

  // 👗 Fashion & Design Challenges
  "Ball Challenge",
  "Design Challenge",
  "Makeover Challenge",
  "Runway Challenge",
  "Unconventional Materials Challenge",

  // 📺 Media & Branding Challenges
  "Commercial Challenge",
  "Music Video Challenge",
  "Photoshoot Challenge",
  "Branding Challenge",

  // 🧠 Mini Challenges
  "Reading Challenge",
  "Puppet Challenge",
]

const runwayThemes = [
  // Season 1–17 Themes
  "Drag on a Dime",
  "Christmas Couture",
  "Face, Face, Face of Cakes",
  "Apocalyptic Couture",
  "Party Box",
  "Nude Illusion",
  "Design Challenge of the Past",
  "Wedding Eleganza",
  "Is It Cake?",
  "Monopulence",
  "Nailed It",
  "Parasols, Shady Ladies",
  "Betsey Johnson Fashion Collection",
  "Who Wears Short Shorts?",
  "Black & White Ball",
  // All Stars Themes
  "60's Glam",
  "Bad Girl Chic",
  "Girl Group Superstars",
  "Secret Identity",
  "Superhero vs. Supervillain",
  "All Star Drag",
  "The Pleather Principle",
  "The Realness of Fortune Ball",
  "Knitty Knitty Bang Bang",
  "What Lies Beneath",
  "All Glowed Up",
  "Grand Finale Eleganza",
  // Additional Themes
  "Rainbow-She-Betta-Do",
  "Sexy Unicorn",
  "Village People Eleganza Extravaganza",
  "Money Makes the World Go Round",
  "Color My World",
  "Browntown",
  "It's Five O'Clock Somewhere",
  "Eat Me!",
  "Blow Me Away!",
  "Re-United Nations Make-Overs",
  "Star Trek: Queens in Outer Space",
  "LaLaPaRuZa",
  "Beautiful Nightmare",
  "Metallica",
  "Night of 1,000 Beyoncés",
  "The Realness of Fortune Ball",
  "Before and After",
]

// Lipsync songs
const lipsynSongs = [
  '"Toxic" by Britney Spears',
  '"Stronger" by Britney Spears',
  '"I Will Survive" by Gloria Gaynor',
  '"Shut Up and Drive" by Rihanna',
  '"Call Me Mother" by RuPaul',
  '"Pound the Alarm" by Nicki Minaj',
  '"Whip It" by Devo',
  '"Born This Way" by Lady Gaga',
  '"Emotions" by Mariah Carey',
  '"Physical" by Dua Lipa',
  '"Rain On Me" by Lady Gaga & Ariana Grande',
  '"Levitating" by Dua Lipa',
  '"Stupid Love" by Lady Gaga',
  '"Juice" by Lizzo',
  '"Wrecking Ball" by Miley Cyrus',
  '"Rhythm Nation" by Janet Jackson',
  '"Upside Down" by Diana Ross',
  '"Survivor" by Destiny\'s Child',
  '"Dancing Queen" by ABBA',
  '"Believe" by Cher',
  '"Vogue" by Madonna',
  '"Like a Virgin" by Madonna',
  '"Material Girl" by Madonna',
  '"Express Yourself" by Madonna',
  '"Hung Up" by Madonna',
  '"Single Ladies" by Beyoncé',
  '"Crazy in Love" by Beyoncé',
  '"Run the World (Girls)" by Beyoncé',
  '"Formation" by Beyoncé',
  '"Halo" by Beyoncé',
  '"Umbrella" by Rihanna',
  '"Diamonds" by Rihanna',
  '"Work" by Rihanna',
  '"Don\'t Stop the Music" by Rihanna',
  '"Only Girl (In the World)" by Rihanna',
  '"Bad Romance" by Lady Gaga',
  '"Poker Face" by Lady Gaga',
  '"Telephone" by Lady Gaga ft. Beyoncé',
  '"Applause" by Lady Gaga',
  '"Just Dance" by Lady Gaga',
  '"Oops!... I Did It Again" by Britney Spears',
  '"...Baby One More Time" by Britney Spears',
  '"Circus" by Britney Spears',
  '"Womanizer" by Britney Spears',
  '"Gimme More" by Britney Spears',
  '"Tik Tok" by Kesha',
  '"Blow" by Kesha',
  '"Die Young" by Kesha',
  '"Praying" by Kesha',
  '"Woman" by Kesha',
  '"Chandelier" by Sia',
  '"Cheap Thrills" by Sia',
  '"Titanium" by David Guetta ft. Sia',
  '"Elastic Heart" by Sia',
  '"The Greatest" by Sia',
  '"Firework" by Katy Perry',
  '"Roar" by Katy Perry',
  '"Dark Horse" by Katy Perry',
  '"California Gurls" by Katy Perry',
  '"I Kissed a Girl" by Katy Perry',
  '"Shake It Off" by Taylor Swift',
  '"Blank Space" by Taylor Swift',
  '"Look What You Made Me Do" by Taylor Swift',
  '"You Need to Calm Down" by Taylor Swift',
  '"ME!" by Taylor Swift ft. Brendon Urie',
  '"Hollaback Girl" by Gwen Stefani',
  '"Sweet Escape" by Gwen Stefani',
  '"What You Waiting For?" by Gwen Stefani',
  '"Rich Girl" by Gwen Stefani',
  '"Cool" by Gwen Stefani',
]

// Performance descriptions
const performanceDescriptions = {
  great: [
    "delivered a jaw-dropping performance that left everyone gagging!",
    "absolutely slayed the challenge with unmatched charisma, uniqueness, nerve, and talent!",
    "gave a masterclass performance that will go down in herstory!",
    "dominated the challenge with exceptional skill and creativity!",
    "turned it OUT and left the judges speechless with their brilliance!",
    "served pure excellence and showed why they're a frontrunner in this competition!",
    "created a moment so iconic it will be referenced for seasons to come!",
    "executed everything flawlessly and made it look effortless!",
    "brought the house down with a performance that had everyone on their feet!",
    "showcased star quality that cannot be taught - they were born to do this!",
    "delivered perfection from start to finish - not a single detail was missed!",
    "proved they're a force to be reckoned with through sheer talent and determination!",
    "had RuPaul cackling with delight throughout their entire performance!",
    "showed versatility, creativity, and polish that put them miles ahead of the competition!",
    "created a moment of pure drag excellence that defines what this competition is all about!",
  ],
  good: [
    "impressed the judges with a solid performance.",
    "showed great potential and delivered a strong showing.",
    "stood out with a polished and professional performance.",
    "brought their A-game and delivered a memorable performance.",
    "shined bright with confidence and skill.",
    "demonstrated clear talent and made smart creative choices.",
    "showed they understood the assignment and executed it well.",
    "delivered a performance that was both entertaining and polished.",
    "brought energy and charisma to a well-executed challenge.",
    "showed growth and applied feedback from previous challenges.",
    "presented a cohesive vision that resonated with the judges.",
    "balanced humor and polish in a way that felt authentic.",
    "demonstrated versatility and adaptability in their approach.",
    "brought their unique perspective while meeting all requirements.",
    "showed they're a serious contender with consistent quality.",
  ],
  meh: [
    "gave a safe but forgettable performance.",
    "delivered a middle-of-the-road performance that didn't stand out.",
    "showed some good moments but lacked consistency.",
    "met the basic requirements but didn't exceed expectations.",
    "was neither terrible nor impressive - just there.",
    "played it too safe and failed to make a lasting impression.",
    "got lost in the shuffle among stronger performances.",
    "showed glimpses of talent but didn't fully commit to their choices.",
    "delivered something competent but lacking in originality.",
    "seemed to be holding back rather than giving their all.",
    "presented ideas that weren't fully realized or developed.",
    "struggled to find the balance between too much and too little.",
    "showed they have potential but need to push themselves harder.",
    "failed to elevate their performance beyond the basics.",
    "delivered something that was technically fine but lacked that special spark.",
  ],
  bad: [
    "struggled to connect with the challenge.",
    "had some good ideas but failed in the execution.",
    "showed nerves that affected their performance.",
    "missed the mark on what the challenge was asking for.",
    "stumbled through the challenge with visible difficulty.",
    "seemed confused about the direction they wanted to take.",
    "got in their head and overthought every aspect of the challenge.",
    "made choices that didn't showcase their strengths.",
    "failed to prepare adequately and it showed in their performance.",
    "couldn't recover from early mistakes that snowballed throughout.",
    "delivered something that felt unfinished and underdeveloped.",
    "showed a disconnect between concept and execution.",
    "lacked the confidence needed to sell even mediocre material.",
    "made several critical errors that undermined their performance.",
    "seemed overwhelmed by the pressure of the competition.",
  ],
  horrendous: [
    "completely bombed the challenge in spectacular fashion.",
    "gave a performance so bad it might become iconic for all the wrong reasons.",
    "seemed completely lost throughout the entire challenge.",
    "delivered a train wreck that left the judges speechless.",
    "crashed and burned so hard they might need medical attention for their ego.",
    "created a disaster of such magnitude it was almost impressive.",
    "failed on every conceivable level from concept to execution.",
    "delivered something so confusing it defied logical explanation.",
    "gave a performance that will be used as a cautionary tale for future contestants.",
    "seemed to be competing in an entirely different challenge than everyone else.",
    "made choices so questionable they left Michelle Visage's eyebrow permanently raised.",
    "created a moment so awkward it caused physical pain to watch.",
    "delivered something so messy it made a dumpster fire look organized.",
    "showed a complete misunderstanding of the challenge, the audience, and possibly drag itself.",
    "gave a performance that might be studied by scientists as a perfect example of what not to do.",
  ],
}

// Runway descriptions
const runwayDescriptions = {
  amazing: [
    "served an absolutely stunning runway that left the judges gagging!",
    "turned a jaw-dropping look that will be remembered for seasons to come!",
    "presented a flawless runway with impeccable attention to detail!",
    "delivered fashion perfection that belongs in the drag hall of fame!",
    "stunned everyone with a breathtaking interpretation of the theme!",
    "created a fashion moment so powerful it could make Anna Wintour smile!",
    "revolutionized the runway with a look that pushed the boundaries of drag!",
    "presented couture that was both conceptual and beautifully executed!",
    "served a look so polished and perfect it seemed impossible it was made by human hands!",
    "brought high fashion to new heights with an editorial-worthy ensemble!",
    "delivered a runway so captivating it made time stand still on the main stage!",
    "created a visual masterpiece that balanced drama, fashion, and storytelling!",
    "presented a look so detailed and intricate it deserves its own museum exhibit!",
    "transformed the runway into their personal fashion show with unmatched confidence!",
    "served a look so powerful and perfect it made the other queens question their choices!",
  ],
  great: [
    "presented a beautiful runway that impressed the judges.",
    "served a polished and well-executed look on the runway.",
    "showed excellent taste and creativity in their runway presentation.",
    "delivered a runway that perfectly captured the theme.",
    "turned a head-turning look that stood out on the runway.",
    "showcased their unique aesthetic while honoring the runway theme.",
    "balanced creativity and polish in a runway that felt distinctly them.",
    "presented a cohesive concept from head to toe with no detail overlooked.",
    "delivered a runway that told a clear story through fashion.",
    "showed a sophisticated understanding of proportion and silhouette.",
    "created a runway moment that highlighted their strengths as an artist.",
    "presented a look that was both fashion-forward and true to drag traditions.",
    "served a runway that demonstrated both technical skill and creative vision.",
    "delivered a look that was elevated, polished, and conceptually strong.",
    "showed versatility while maintaining their signature drag aesthetic.",
  ],
  good: [
    "showed a solid runway with good attention to detail.",
    "presented a nice interpretation of the runway theme.",
    "delivered a competent look that met the requirements.",
    "served a runway that was pleasing but not groundbreaking.",
    "showed good taste with their runway presentation.",
    "created a look that was well-constructed and visually appealing.",
    "presented a runway that showed clear effort and thought.",
    "delivered a look that was on-theme and well-styled.",
    "served a runway that was cohesive from head to toe.",
    "showed understanding of the assignment with their interpretation.",
    "presented a look that was polished if somewhat expected.",
    "delivered a runway that demonstrated their personal style.",
    "created a solid look that was appropriate for the theme.",
    "showed good instincts with color, texture, and proportion.",
    "presented a runway that was technically sound and visually pleasant.",
  ],
  mediocre: [
    "presented a runway that was somewhat underwhelming.",
    "delivered a look that didn't fully capture the theme.",
    "showed a runway with some execution issues.",
    "served a safe but forgettable interpretation of the theme.",
    "presented a look that lacked the wow factor.",
    "created a runway that felt unfinished or underdeveloped.",
    "delivered a look where the concept exceeded the execution.",
    "showed a runway that needed more editing and refinement.",
    "presented something that felt disconnected from the theme.",
    "served a look that was neither terrible nor impressive.",
    "showed a runway that failed to highlight their strengths.",
    "delivered a look that felt like it was missing something essential.",
    "presented a runway that lacked cohesion or clear direction.",
    "created a look that felt too simple for this stage of the competition.",
    "showed a runway that needed more attention to proportion and detail.",
  ],
  bad: [
    "struggled with their runway presentation.",
    "missed the mark completely with their interpretation.",
    "presented a look with serious construction issues.",
    "delivered a runway that confused the judges.",
    "served a look that failed to meet the basic requirements.",
    "created a runway disaster that couldn't be saved by personality.",
    "showed a look that appeared unfinished and hastily assembled.",
    "presented something that seemed to ignore the theme entirely.",
    "delivered a runway with multiple competing ideas that didn't work together.",
    "served a look with proportions so off it distorted their silhouette.",
    "showed a runway that looked cheap despite potentially expensive materials.",
    "presented a look that seemed to be falling apart on the runway.",
    "created a visual cacophony that hurt the eyes and confused the mind.",
    "delivered a runway that demonstrated poor taste and worse execution.",
    "showed a look so ill-conceived it made the judges physically recoil.",
  ],
}

// Lipsync performance descriptions
const lipsynPerformances = {
  amazing: [
    "delivered a legendary lipsync that will be remembered for seasons to come!",
    "embodied every word, every beat, and left everyone gagging!",
    "turned the party with death drops, splits, and pure emotion!",
    "gave a masterclass in how to slay a lipsync for your life!",
    "channeled the song so perfectly it's like they wrote it themselves!",
    "created a lipsync moment so iconic it will be studied by future drag generations!",
    "performed with such passion and precision it was like watching the original artist!",
    "delivered a performance so powerful it brought tears to the judges' eyes!",
    "executed moves so fierce and unexpected they redefined what a lipsync can be!",
    "commanded the stage with such authority it was impossible to look away!",
    "connected to the lyrics on a spiritual level that transcended mere performance!",
    "delivered reveals, stunts, and emotional moments with perfect timing!",
    "showed such versatility and range it was like watching multiple performers!",
    "created a moment of pure drag magic that epitomizes the art form!",
    "performed with such conviction it felt like their life truly depended on it!",
  ],
  great: [
    "hit every beat and served face throughout the entire performance!",
    "connected emotionally with the lyrics and captivated the judges!",
    "showed incredible energy and precision in their movements!",
    "commanded the stage with confidence and star power!",
    "delivered stunning choreography that matched the song perfectly!",
    "performed with a perfect balance of technique and raw emotion!",
    "interpreted the song with nuance and thoughtful character choices!",
    "maintained intensity and focus from the first beat to the last note!",
    "showcased impressive dance skills while never losing the lyrics!",
    "built a performance that started strong and ended even stronger!",
    "created dynamic moments that perfectly matched the song's energy!",
    "showed versatility by incorporating both high energy and emotional moments!",
    "delivered a performance that honored the song while making it their own!",
    "maintained perfect synchronization between movement and music!",
    "showed they understood the assignment with a well-planned performance!",
  ],
  good: [
    "gave a solid performance with good energy and emotion.",
    "knew all the words and moved with confidence.",
    "showed moments of brilliance throughout the lipsync.",
    "connected with the song and delivered a respectable performance.",
    "maintained strong stage presence throughout the number.",
    "delivered a consistent performance with good technique.",
    "showed they were prepared and knew the song well.",
    "performed with energy that matched the tone of the song.",
    "delivered clean choreography that complemented the lyrics.",
    "showed personality while maintaining focus on the performance.",
    "used the stage effectively and engaged with the audience.",
    "balanced performance elements without going overboard.",
    "showed good instincts about when to build and release energy.",
    "maintained character throughout the entire performance.",
    "delivered a performance that was entertaining and competent.",
  ],
  mediocre: [
    "gave an adequate performance but lacked that special spark.",
    "knew the words but didn't fully embody the song's emotion.",
    "had a few good moments but was inconsistent overall.",
    "showed some energy but failed to truly captivate.",
    "delivered a forgettable performance that didn't stand out.",
    "seemed to be going through the motions rather than feeling the music.",
    "showed hesitation that prevented them from fully committing.",
    "performed with technical accuracy but little emotional connection.",
    "delivered movements that sometimes felt disconnected from the lyrics.",
    "had moments where they seemed to fade into the background.",
    "showed potential but held back from giving their all.",
    "performed competently but without the necessary urgency.",
    "delivered a performance that felt rehearsed rather than authentic.",
    "showed uneven energy throughout the number.",
    "failed to make the performance their own in any memorable way.",
  ],
  bad: [
    "struggled to keep up with the energy of the song.",
    "missed several words and looked uncomfortable on stage.",
    "failed to connect with the emotion of the lyrics.",
    "moved awkwardly and lacked confidence in their performance.",
    "seemed lost during key moments of the song.",
    "appeared to forget choreography and improvised poorly.",
    "delivered movements that fought against the rhythm of the song.",
    "showed visible nervousness that undermined their performance.",
    "failed to project energy beyond the first few rows.",
    "performed with a disconnect between face and body movements.",
    "seemed to be performing a different song than what was playing.",
    "showed little understanding of the song's meaning or mood.",
    "delivered a performance that felt forced and unnatural.",
    "failed to use the stage effectively, staying in one small area.",
    "showed a lack of preparation that was impossible to hide.",
  ],
}

// Selection reasons
const selectionReasons = [
  "They've been giving me dirty looks all season.",
  "I've never liked their drag aesthetic.",
  "They threw me under the bus in the last challenge.",
  "I need to eliminate the strongest competition.",
  "They've been talking behind my back.",
  "I want to prove I can beat them fair and square.",
  "They said my wig looked like a dead cat last week.",
  "I've been waiting for this moment since day one.",
  "They stole my makeup during episode three.",
  "I need to avenge my drag sister who they sent home.",
  "Their attitude has been rubbing me the wrong way.",
  "I want to show the judges I can beat anyone.",
  "They borrowed my dress and returned it with a stain.",
  "I heard them say my drag was 'basic' in Untucked.",
  "They're my biggest competition for the crown.",
  "I need to prove myself against the best.",
  "They've been skating by while I've been working hard.",
  "I want to send a message to the other girls.",
  "They've been getting praise for mediocre performances.",
  "I never got to thank them for that shady comment about my contour.",
  "Their runway looks have been copied from my Instagram.",
  "I want to show them what a real lipsync assassin looks like.",
  "They said my padding looked suspicious in the workroom.",
  "I've been waiting for a chance to show them up.",
  "They laughed when I tripped during the mini challenge.",
  "I need to remind everyone why I'm still here.",
  "They've been getting on my last nerve all competition.",
  "I want to prove I deserve to be here more than they do.",
  "They've been coasting on looks while I've been serving performance.",
  "I need to settle our rivalry once and for all.",
]

// RuPaul catchphrases
const ruPaulCatchphrases = [
  "If you can't love yourself, how in the hell you gonna love somebody else?",
  "The time has come for you to lipsync for your LIFE!",
  "Sashay away.",
  "Shantay, you stay!",
  "Bring back my girls!",
  "Condragulations, you are the winner of this week's challenge!",
  "I'm sorry my dear, but you are up for elimination.",
  "Good luck, and don't fuck it up!",
  "Silence! I've made my decision.",
  "The library is officially open!",
  "Everybody say LOVE!",
  "Now, let the music play!",
  "Remember to love yourself, because if you don't love yourself, how in the hell are you gonna love somebody else?",
  "We're all born naked and the rest is drag.",
  "You better work!",
  "Gentlemen, start your engines, and may the best drag queen win!",
  "Category is...",
  "She done already done had herses!",
  "Don't be jealous of my boogie!",
  "Can I get an amen up in here?",
  "Sissy that walk!",
  "The realness!",
  "Charisma, Uniqueness, Nerve, and Talent!",
  "Reading is fundamental!",
  "Water off a duck's back!",
  "Not today, Satan! Not today!",
  "Halleloo!",
  "No tea, no shade, no pink lemonade!",
  "Serving face, serving body, serving realness!",
  "That's a lot of emotion for safe.",
]

// DOM Elements
const setupScreen = document.getElementById("setup-screen")
const challengeScreen = document.getElementById("challenge-screen")
const performanceScreen = document.getElementById("performance-screen")
const placementScreen = document.getElementById("placement-screen")
const bottomScreen = document.getElementById("bottom-screen")
const secondQueenScreen = document.getElementById("second-queen-screen")
const lipsynScreen = document.getElementById("lipsync-screen")
const trackRecordScreen = document.getElementById("track-record-screen")
const finaleScreen = document.getElementById("finale-screen")
const finaleLipsynScreen = document.getElementById("finale-lipsync-screen")
const winnerScreen = document.getElementById("winner-screen")

// Setup event listeners
document.getElementById("queens-count").addEventListener("change", generateQueenInputs)
document.getElementById("start-game").addEventListener("click", startGame)
document.getElementById("perform-challenge").addEventListener("click", performChallenge)
document.getElementById("announce-placements").addEventListener("click", announcePlacements)
document.getElementById("bottom-queens").addEventListener("click", showBottomQueens)
document.getElementById("select-second-queen").addEventListener("click", selectSecondQueen)
document.getElementById("start-lipsync").addEventListener("click", startLipsync)
document.getElementById("next-episode").addEventListener("click", nextEpisode)
document.getElementById("start-finale-lipsyncs").addEventListener("click", startFinaleLipsyncs)
document.getElementById("determine-finale-winner").addEventListener("click", determineFinaleWinner)
document.getElementById("restart-game").addEventListener("click", restartGame)
document.getElementById("randomize-relationships").addEventListener("click", randomizeRelationships)

// Generate queen name inputs based on selected count
function generateQueenInputs() {
  const count = Number.parseInt(document.getElementById("queens-count").value)
  const container = document.getElementById("queen-names-container")
  container.innerHTML = ""

  for (let i = 1; i <= count; i++) {
    const div = document.createElement("div")
    div.className = "queen-setup"

    // Create image preview and file input
    const imagePreview = document.createElement("div")
    imagePreview.className = "image-upload"

    const previewDiv = document.createElement("div")
    previewDiv.className = "image-preview"
    previewDiv.id = `preview-${i}`

    const previewImg = document.createElement("img")
    previewImg.src = defaultQueenImages[(i - 1) % defaultQueenImages.length]
    previewImg.alt = `Queen ${i}`
    previewDiv.appendChild(previewImg)

    const fileLabel = document.createElement("label")
    fileLabel.className = "image-upload-btn"
    fileLabel.htmlFor = `queen-image-${i}`
    fileLabel.textContent = "Choose Image"

    const fileInput = document.createElement("input")
    fileInput.type = "file"
    fileInput.id = `queen-image-${i}`
    fileInput.accept = "image/*"
    fileInput.addEventListener("change", (e) => {
      handleImageUpload(e, i)
    })

    imagePreview.appendChild(previewDiv)
    imagePreview.appendChild(fileLabel)
    imagePreview.appendChild(fileInput)

    // Create name input
    const nameGroup = document.createElement("div")
    nameGroup.className = "queen-input-group"

    const nameRow = document.createElement("div")
    nameRow.className = "queen-input-row"

    const nameLabel = document.createElement("label")
    nameLabel.htmlFor = `queen-${i}`
    nameLabel.textContent = `Queen ${i} Name:`

    const nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.id = `queen-${i}`
    nameInput.placeholder = "Enter queen name"
    nameInput.value = `Queen ${i}`

    nameRow.appendChild(nameLabel)
    nameRow.appendChild(nameInput)
    nameGroup.appendChild(nameRow)

    div.appendChild(imagePreview)
    div.appendChild(nameGroup)
    container.appendChild(div)
  }

  // Generate relationship matrix
  generateRelationshipMatrix(count)
}

// Generate relationship matrix
function generateRelationshipMatrix(count) {
  const container = document.getElementById("relationship-table-container")
  container.innerHTML = ""

  const table = document.createElement("table")
  table.className = "relationship-table"

  // Create header row
  const headerRow = document.createElement("tr")
  headerRow.innerHTML = "<th>Queen</th>"

  for (let i = 1; i <= count; i++) {
    const nameInput = document.getElementById(`queen-${i}`)
    const queenName = nameInput ? nameInput.value || `Queen ${i}` : `Queen ${i}`
    headerRow.innerHTML += `<th>${queenName}</th>`
  }

  table.appendChild(headerRow)

  // Create rows for each queen
  for (let i = 1; i <= count; i++) {
    const nameInput = document.getElementById(`queen-${i}`)
    const queenName = nameInput ? nameInput.value || `Queen ${i}` : `Queen ${i}`

    const row = document.createElement("tr")
    row.innerHTML = `<th>${queenName}</th>`

    for (let j = 1; j <= count; j++) {
      if (i === j) {
        // Queens can't have relationships with themselves
        row.innerHTML += "<td>-</td>"
      } else {
        row.innerHTML += `
              <td>
                <input type="number" id="relationship-${i}-${j}" class="relationship-value" min="1" max="10" value="5">
              </td>
            `
      }
    }

    table.appendChild(row)
  }

  container.appendChild(table)

  // Add event listeners to relationship inputs
  document.querySelectorAll(".relationship-value").forEach((input) => {
    updateRelationshipColor(input)
    input.addEventListener("input", function () {
      updateRelationshipColor(this)
    })
  })
}

// Randomize relationships
function randomizeRelationships() {
  const count = Number.parseInt(document.getElementById("queens-count").value)

  for (let i = 1; i <= count; i++) {
    for (let j = 1; j <= count; j++) {
      if (i !== j) {
        const input = document.getElementById(`relationship-${i}-${j}`)
        if (input) {
          // Random value between 1 and 10
          input.value = Math.floor(Math.random() * 10) + 1

          // Update input color based on value
          updateRelationshipColor(input)
        }
      }
    }
  }
}

// Update relationship input color based on value
function updateRelationshipColor(input) {
  const value = Number.parseInt(input.value)

  input.classList.remove("relationship-good", "relationship-neutral", "relationship-bad")

  if (value >= 7) {
    input.classList.add("relationship-good")
  } else if (value >= 4) {
    input.classList.add("relationship-neutral")
  } else {
    input.classList.add("relationship-bad")
  }
}

// Handle image upload and preview
function handleImageUpload(event, queenIndex) {
  const file = event.target.files[0]
  if (file && file.type.match("image.*")) {
    const reader = new FileReader()

    reader.onload = (e) => {
      const previewDiv = document.getElementById(`preview-${queenIndex}`)
      const img = previewDiv.querySelector("img")
      img.src = e.target.result
    }

    reader.readAsDataURL(file)
  }
}

// Initialize with default 8 queens
generateQueenInputs()

// Start the game with the entered queens
function startGame() {
  const count = Number.parseInt(document.getElementById("queens-count").value)
  gameState.queens = []
  gameState.relationships = {}
  gameState.episodePerformances = {} // Initialize episode performances

  // Create queens
  for (let i = 1; i <= count; i++) {
    const name = document.getElementById(`queen-${i}`).value || `Queen ${i}`
    const previewDiv = document.getElementById(`preview-${i}`)
    const img = previewDiv.querySelector("img")
    const imageUrl = img.src

    const queenId = i
    gameState.queens.push({
      id: queenId,
      name: name,
      imageUrl: imageUrl,
      status: "active",
      placement: "",
      wins: 0,
      highs: 0,
      safes: 0,
      lows: 0,
      bottoms: 0,
      points: 0,
      eliminated: false,
    })

    // Initialize episode performances for this queen
    gameState.episodePerformances[queenId] = {}
  }

  // Store relationships
  for (let i = 1; i <= count; i++) {
    gameState.relationships[i] = {}

    for (let j = 1; j <= count; j++) {
      if (i !== j) {
        const input = document.getElementById(`relationship-${i}-${j}`)
        if (input) {
          gameState.relationships[i][j] = Number.parseInt(input.value)
        }
      }
    }
  }

  // Start first episode
  gameState.currentEpisode = 1
  showScreen(challengeScreen)
  announceChallenge()
}

let challengestorage = ""
let runwaystorage = ""

// Announce the challenge for the current episode
function announceChallenge() {
  // Select a random challenge
  const challengeIndex = Math.floor(Math.random() * challenges.length)
  gameState.currentChallenge = challenges[challengeIndex]
  challengestorage = challenges[challengeIndex]

  // Check if it's a runway/design challenge
  const runwayDesignChallenges = ["Ball Challenge", "Design Challenge", "Drag on a Dime"]
  gameState.isRunwayChallenge = runwayDesignChallenges.includes(gameState.currentChallenge)

  document.getElementById("episode-info").innerHTML = `Episode ${gameState.currentEpisode}`

  document.getElementById("challenge-description").innerHTML = `
        <div class="announcement">
          <h3>${getRandomRuPaulCatchphrase()}</h3>
          <p><strong>${gameState.currentChallenge}</strong></p>
          <p>The queens will need to bring their best to impress the judges!</p>
        </div>
      `

  // Add runway theme if it's not a runway/design challenge
  if (!gameState.isRunwayChallenge) {
    const runwayIndex = Math.floor(Math.random() * runwayThemes.length)
    gameState.currentRunway = runwayThemes[runwayIndex]
    runwaystorage = runwayThemes[runwayIndex]

    document.getElementById("runway-theme").style.display = "block"
    document.getElementById("runway-description").textContent = gameState.currentRunway
  } else {
    document.getElementById("runway-theme").style.display = "none"
    gameState.currentRunway = null
    runwaystorage = ""
  }
}

// Get random RuPaul catchphrase
function getRandomRuPaulCatchphrase() {
  return ruPaulCatchphrases[Math.floor(Math.random() * ruPaulCatchphrases.length)]
}

// Perform the challenge and generate scores
function performChallenge() {
  gameState.performances = []
  const performancesContainer = document.getElementById("performances-container")
  const challengeD = document.getElementById("challengedisplay")
  const runwayD = document.getElementById("runwaydisplay")

  performancesContainer.innerHTML = ""
  challengeD.textContent = challengestorage
  runwayD.textContent = runwaystorage

  // Only active queens perform
  const activeQueens = gameState.queens.filter((queen) => !queen.eliminated)

  activeQueens.forEach((queen) => {
    // Generate random challenge score from 10 to 80
    const challengeScore = Math.floor(Math.random() * 71) + 10
    let performanceLevel, description

    if (challengeScore >= 70) {
      performanceLevel = "great"
    } else if (challengeScore >= 60) {
      performanceLevel = "good"
    } else if (challengeScore >= 45) {
      performanceLevel = "meh"
    } else if (challengeScore >= 30) {
      performanceLevel = "bad"
    } else {
      performanceLevel = "horrendous"
    }

    // Get random description for this performance level
    console.log(performanceLevel)
    const descriptions = performanceDescriptions[performanceLevel]
    description = descriptions[Math.floor(Math.random() * descriptions.length)]

    // Generate runway score if applicable
    let runwayScore = 0
    let runwayLevel = ""
    let runwayDescription = ""

    if (!gameState.isRunwayChallenge) {
      runwayScore = Math.floor(Math.random() * 21) // 0-30

      if (runwayScore >= 18) {
        runwayLevel = "amazing"
      } else if (runwayScore >= 15) {
        runwayLevel = "great"
      } else if (runwayScore >= 12) {
        runwayLevel = "good"
      } else if (runwayScore >= 9) {
        runwayLevel = "mediocre"
      } else {
        runwayLevel = "bad"
      }

      const runwayDescriptionsForLevel = runwayDescriptions[runwayLevel] || runwayDescriptions.good
      runwayDescription = runwayDescriptionsForLevel[Math.floor(Math.random() * runwayDescriptionsForLevel.length)]
    }

    // Calculate total score
    const totalScore = challengeScore + runwayScore

    gameState.performances.push({
      queen: queen,
      challengeScore: challengeScore,
      runwayScore: runwayScore,
      totalScore: totalScore,
      level: performanceLevel,
      description: description,
      runwayLevel: runwayLevel,
      runwayDescription: runwayDescription,
    })

    // Create performance card
    const performanceContainer = document.createElement("div")
    performanceContainer.className = "performance-container"

    let performanceHTML = `
          <div class="queen-setup-header">
            <img src="${queen.imageUrl}" alt="${queen.name}" class="queen-setup-image">
            <h3>${queen.name}</h3>
          </div>
          <div class="performance-scores">
            <div class="performance-score">
              <strong>Challenge:</strong> ${challengeScore}
            </div>
        `

    if (!gameState.isRunwayChallenge) {
      performanceHTML += `
            <div class="performance-score">
              <strong>Runway:</strong> ${runwayScore}
            </div>
            <div class="performance-score">
              <strong>Total:</strong> ${totalScore}
            </div>
          `
    }

    performanceHTML += `</div>`

    performanceHTML += `
          <div class="performance-description">
            <p><strong>Challenge:</strong> ${queen.name} ${description}</p>
        `

    if (!gameState.isRunwayChallenge) {
      performanceHTML += `
            <p><strong>Runway:</strong> ${queen.name} ${runwayDescription}</p>
          `
    }

    performanceHTML += `</div>`

    performanceContainer.innerHTML = performanceHTML
    performancesContainer.appendChild(performanceContainer)
  })

  showScreen(performanceScreen)
}

// Announce placements based on performances
function announcePlacements() {
  // Sort performances by total score (highest first)
  gameState.performances.sort((a, b) => b.totalScore - a.totalScore)

  const placementsContainer = document.getElementById("placements-container")
  placementsContainer.innerHTML = ""

  // Determine placements
  const totalQueens = gameState.performances.length
  gameState.placements = {
    win: [gameState.performances[0].queen],
    high: [],
    safe: [],
    low: [],
    bottom: [],
  }

  // Assign high placements (about 20% of queens after the winner)
  const highCount = Math.max(1, Math.floor(totalQueens * 0.2))
  for (let i = 1; i <= highCount && i < totalQueens; i++) {
    gameState.placements.high.push(gameState.performances[i].queen)
  }

  // Always assign exactly 4 queens to bottom (or fewer if not enough queens)
  const bottomCount = Math.min(4, totalQueens - 1) // Ensure we don't put everyone in the bottom
  for (let i = totalQueens - bottomCount; i < totalQueens; i++) {
    // Make sure this queen isn't already in high
    const currentQueen = gameState.performances[i].queen
    const alreadyHigh = gameState.placements.high.some((q) => q.id === currentQueen.id)

    if (!alreadyHigh) {
      gameState.placements.bottom.push(currentQueen)
    }
  }

  // The rest are safe
  for (let i = highCount + 1; i < totalQueens - bottomCount; i++) {
    gameState.placements.safe.push(gameState.performances[i].queen)
  }

  // Update queen stats and points
  gameState.placements.win.forEach((queen) => {
    const queenObj = gameState.queens.find((q) => q.id === queen.id)
    queenObj.wins++
    queenObj.points += 5 // 5 points for WIN

    // Record performance for this episode
    if (!gameState.episodePerformances[gameState.currentEpisode]) {
      gameState.episodePerformances[gameState.currentEpisode] = {}
    }
    gameState.episodePerformances[gameState.currentEpisode][queen.id] = "WIN"
  })

  gameState.placements.high.forEach((queen) => {
    const queenObj = gameState.queens.find((q) => q.id === queen.id)
    queenObj.highs++
    queenObj.points += 4 // 4 points for HIGH

    // Record performance for this episode
    if (!gameState.episodePerformances[gameState.currentEpisode]) {
      gameState.episodePerformances[gameState.currentEpisode] = {}
    }
    gameState.episodePerformances[gameState.currentEpisode][queen.id] = "HIGH"
  })

  gameState.placements.safe.forEach((queen) => {
    const queenObj = gameState.queens.find((q) => q.id === queen.id)
    queenObj.safes++
    queenObj.points += 3 // 3 points for SAFE

    // Record performance for this episode
    if (!gameState.episodePerformances[gameState.currentEpisode]) {
      gameState.episodePerformances[gameState.currentEpisode] = {}
    }
    gameState.episodePerformances[gameState.currentEpisode][queen.id] = "SAFE"
  })

  gameState.placements.low.forEach((queen) => {
    const queenObj = gameState.queens.find((q) => q.id === queen.id)
    queenObj.lows++
    queenObj.points += 2 // 2 points for LOW

    // Record performance for this episode
    if (!gameState.episodePerformances[gameState.currentEpisode]) {
      gameState.episodePerformances[gameState.currentEpisode] = {}
    }
    gameState.episodePerformances[gameState.currentEpisode][queen.id] = "LOW"
  })

  gameState.placements.bottom.forEach((queen) => {
    const queenObj = gameState.queens.find((q) => q.id === queen.id)
    queenObj.bottoms++
    queenObj.points += 1 // 1 point for BTM

    // Record performance for this episode
    if (!gameState.episodePerformances[gameState.currentEpisode]) {
      gameState.episodePerformances[gameState.currentEpisode] = {}
    }
    gameState.episodePerformances[gameState.currentEpisode][queen.id] = "BTM"
  })

  // Display placements
  placementsContainer.innerHTML += `<h3 class="section-title">Winner</h3>`
  gameState.placements.win.forEach((queen) => {
    placementsContainer.innerHTML += `
          <div class="queen-card win">
            <img src="${queen.imageUrl}" alt="${queen.name}" class="queen-image">
            <h3>${queen.name}</h3>
            <p>Condragulations, you are the winner of this week's challenge!</p>
          </div>
        `
  })

  if (gameState.placements.high.length > 0) {
    placementsContainer.innerHTML += `<h3 class="section-title">High</h3>`
    placementsContainer.innerHTML += `<div class="queen-list">`
    gameState.placements.high.forEach((queen) => {
      placementsContainer.innerHTML += `
            <div class="queen-card high">
              <img src="${queen.imageUrl}" alt="${queen.name}" class="queen-image">
              <h3>${queen.name}</h3>
              <p>You're safe, and you received positive critiques.</p>
            </div>
          `
    })
    placementsContainer.innerHTML += `</div>`
  }

  if (gameState.placements.safe.length > 0) {
    placementsContainer.innerHTML += `<h3 class="section-title">Safe</h3>`
    placementsContainer.innerHTML += `<div class="queen-list">`
    gameState.placements.safe.forEach((queen) => {
      placementsContainer.innerHTML += `
            <div class="queen-card safe">
              <img src="${queen.imageUrl}" alt="${queen.name}" class="queen-image">
              <h3>${queen.name}</h3>
              <p>You are safe.</p>
            </div>
          `
    })
    placementsContainer.innerHTML += `</div>`
  }

  placementsContainer.innerHTML += `<h3 class="section-title">Bottom ${gameState.placements.bottom.length}</h3>`
  placementsContainer.innerHTML += `<div class="queen-list">`
  gameState.placements.bottom.forEach((queen) => {
    placementsContainer.innerHTML += `
          <div class="queen-card bottom">
            <img src="${queen.imageUrl}" alt="${queen.name}" class="queen-image">
            <h3>${queen.name}</h3>
            <p>I'm sorry my dear, you are up for elimination.</p>
          </div>
        `
  })
  placementsContainer.innerHTML += `</div>`

  showScreen(placementScreen)
}

// Show bottom queens and death card results
function showBottomQueens() {
  gameState.bottomQueens = [...gameState.placements.bottom]

  const bottomQueensContainer = document.getElementById("bottom-queens-container")
  bottomQueensContainer.innerHTML = `
        <div class="announcement">
          <p>The bottom ${gameState.bottomQueens.length} queens will now pick cards. One card is the death card.</p>
        </div>
        <div class="queen-list">
          ${gameState.bottomQueens
            .map(
              (queen) => `
            <div class="queen-card bottom">
              <img src="${queen.imageUrl}" alt="${queen.name}" class="queen-image">
              <h3>${queen.name}</h3>
            </div>
          `,
            )
            .join("")}
        </div>
      `

  // Randomly determine which queen gets the death card
  const deathCardIndex = Math.floor(Math.random() * gameState.bottomQueens.length)
  gameState.lipsynQueen1 = gameState.bottomQueens[deathCardIndex]

  // Display death card results
  const deathCardResults = document.getElementById("death-card-results")
  deathCardResults.innerHTML = ""

  gameState.bottomQueens.forEach((queen, index) => {
    const isDeath = index === deathCardIndex

    deathCardResults.innerHTML += `
          <div class="death-card-result ${isDeath ? "death" : ""}">
            <img src="${queen.imageUrl}" alt="${queen.name}" class="queen-image">
            <h4>${queen.name}</h4>
            <div class="death-card-type ${isDeath ? "death" : "safe"}">
              ${isDeath ? "DEATH CARD" : "SAFE CARD"}
            </div>
          </div>
        `
  })

  // Show announcement
  const deathCardAnnouncement = document.getElementById("death-card-announcement")
  deathCardAnnouncement.innerHTML = `
        <h3>${gameState.lipsynQueen1.name} has picked the death card!</h3>
        <p>${gameState.lipsynQueen1.name} must now choose another queen to join them in the lipsync battle.</p>
      `
  deathCardAnnouncement.style.display = "block"

  showScreen(bottomScreen)
}

// Select second queen for lipsync based on relationships
function selectSecondQueen() {
  const deathCardQueen = document.getElementById("death-card-queen")
  deathCardQueen.innerHTML = `
        <div class="announcement">
          <h3>Death Card Selection</h3>
          <p>${gameState.lipsynQueen1.name} must choose another queen from the bottom to join them in the lipsync.</p>
        </div>
      `

  // Filter out the death card queen
  const remainingBottomQueens = gameState.bottomQueens.filter((queen) => queen.id !== gameState.lipsynQueen1.id)

  const remainingContainer = document.getElementById("remaining-bottom-queens")
  remainingContainer.innerHTML = `
        <div class="queen-list">
          ${remainingBottomQueens
            .map(
              (queen) => `
            <div class="queen-card bottom" id="remaining-queen-${queen.id}">
              <img src="${queen.imageUrl}" alt="${queen.name}" class="queen-image">
              <h3>${queen.name}</h3>
            </div>
          `,
            )
            .join("")}
        </div>
      `

  // Use relationships to determine who gets chosen
  // Lower relationship score means more likely to be chosen
  const relationships = gameState.relationships[gameState.lipsynQueen1.id] || {}

  // Calculate weighted probabilities based on inverse relationship scores
  const totalQueens = remainingBottomQueens.length
  let totalWeight = 0
  const weights = []

  remainingBottomQueens.forEach((queen) => {
    // Get relationship score (1-10) or default to 5
    const relationshipScore = relationships[queen.id] || 5
    // Invert score: 11 - score, so 1 becomes 10, 10 becomes 1
    const weight = 11 - relationshipScore
    weights.push(weight)
    totalWeight += weight
  })

  // Select queen based on weights
  let random = Math.random() * totalWeight
  let selectedIndex = 0

  for (let i = 0; i < weights.length; i++) {
    random -= weights[i]
    if (random <= 0) {
      selectedIndex = i
      break
    }
  }

  gameState.lipsynQueen2 = remainingBottomQueens[selectedIndex]

  // Generate a random reason for the selection
  const selectionReason = document.getElementById("selection-reason")
  const randomReason = selectionReasons[Math.floor(Math.random() * selectionReasons.length)]
  selectionReason.innerHTML = `<p>"${randomReason}" - ${gameState.lipsynQueen1.name}</p>`
  selectionReason.style.display = "block"

  // Show selection result after a short delay for drama
  setTimeout(() => {
    const selectionResult = document.getElementById("selection-result")
    selectionResult.innerHTML = `
          <h3>${gameState.lipsynQueen1.name} has chosen ${gameState.lipsynQueen2.name} to lipsync against!</h3>
          <p>Relationship score: ${relationships[gameState.lipsynQueen2.id] || 5}/10</p>
        `
    selectionResult.style.display = "block"

    // Highlight the selected queen
    document.querySelectorAll("#remaining-bottom-queens .queen-card").forEach((card) => {
      if (card.id === `remaining-queen-${gameState.lipsynQueen2.id}`) {
        card.style.border = "2px solid var(--danger)"
        card.style.animation = "pulse 1s infinite"
      }
    })

    // Update the other bottom queens to low placement
    const otherBottomQueens = remainingBottomQueens.filter((queen) => queen.id !== gameState.lipsynQueen2.id)

    otherBottomQueens.forEach((queen) => {
      const queenObj = gameState.queens.find((q) => q.id === queen.id)
      // Remove from bottoms count and add to lows
      queenObj.bottoms--
      queenObj.lows++
      queenObj.points += 1 // +1 point (from 1 to 2)

      // Move from bottom to low in placements
      gameState.placements.bottom = gameState.placements.bottom.filter((q) => q.id !== queen.id)
      gameState.placements.low.push(queen)

      // Update episode performance from BTM to LOW
      if (!gameState.episodePerformances[gameState.currentEpisode]) {
        gameState.episodePerformances[gameState.currentEpisode] = {}
      }
      gameState.episodePerformances[gameState.currentEpisode][queen.id] = "LOW"
    })

    // Show start lipsync button
    document.getElementById("start-lipsync").style.display = "block"
  }, 1500)

  showScreen(secondQueenScreen)
}

// Start lipsync battle
function startLipsync() {
  // Select random lipsync song
  const song = lipsynSongs[Math.floor(Math.random() * lipsynSongs.length)]

  document.getElementById("lipsync-song").innerHTML = `
        <h3>The time has come for you to lipsync for your life!</h3>
        <p>The song is ${song}</p>
      `

  // Reset lipsync result
  document.getElementById("lipsync-result").style.display = "none"
  document.getElementById("determine-winner").textContent = "Determine Winner"
  document.getElementById("determine-winner").onclick = determineLipsynWinner

  const lipsynBattle = document.getElementById("lipsync-battle")
  lipsynBattle.innerHTML = `
        <div class="lipsync-queen" id="lipsync-queen-1">
          <img src="${gameState.lipsynQueen1.imageUrl}" alt="${gameState.lipsynQueen1.name}" class="queen-image">
          <h3>${gameState.lipsynQueen1.name}</h3>
          <p>Preparing to slay...</p>
        </div>
        <div class="versus">VS</div>
        <div class="lipsync-queen" id="lipsync-queen-2">
          <img src="${gameState.lipsynQueen2.imageUrl}" alt="${gameState.lipsynQueen2.name}" class="queen-image">
          <h3>${gameState.lipsynQueen2.name}</h3>
          <p>Preparing to slay...</p>
        </div>
      `

  showScreen(lipsynScreen)
}

// Determine lipsync winner
function determineLipsynWinner() {
  // Generate random scores for both queens (50-100)
  const queen1Score = Math.floor(Math.random() * 51) + 50
  const queen2Score = Math.floor(Math.random() * 51) + 50

  // Determine performance level
  const getPerformanceLevel = (score) => {
    if (score >= 90) return "amazing"
    if (score >= 80) return "great"
    if (score >= 70) return "good"
    if (score >= 60) return "mediocre"
    return "bad"
  }

  const queen1Level = getPerformanceLevel(queen1Score)
  const queen2Level = getPerformanceLevel(queen2Score)

  // Get random descriptions
  const queen1Description =
    lipsynPerformances[queen1Level][Math.floor(Math.random() * lipsynPerformances[queen1Level].length)]
  const queen2Description =
    lipsynPerformances[queen2Level][Math.floor(Math.random() * lipsynPerformances[queen2Level].length)]

  // Update the lipsync battle display with scores and performances
  document.getElementById("lipsync-queen-1").innerHTML = `
        <img src="${gameState.lipsynQueen1.imageUrl}" alt="${gameState.lipsynQueen1.name}" class="queen-image">
        <h3>${gameState.lipsynQueen1.name}</h3>
        <div class="lipsync-score">${queen1Score}</div>
        <p class="lipsync-performance">${gameState.lipsynQueen1.name} ${queen1Description}</p>
      `

  document.getElementById("lipsync-queen-2").innerHTML = `
        <img src="${gameState.lipsynQueen2.imageUrl}" alt="${gameState.lipsynQueen2.name}" class="queen-image">
        <h3>${gameState.lipsynQueen2.name}</h3>
        <div class="lipsync-score">${queen2Score}</div>
        <p class="lipsync-performance">${gameState.lipsynQueen2.name} ${queen2Description}</p>
      `

  // Determine winner based on scores
  const queen1Wins = queen1Score >= queen2Score

  if (queen1Wins) {
    document.getElementById("lipsync-queen-1").classList.add("winner")
    // Only add the loser to eliminatedQueens
    gameState.eliminatedQueens.push(gameState.lipsynQueen2)
    // Only mark the loser as eliminated
    const loser = gameState.queens.find((q) => q.id === gameState.lipsynQueen2.id)
    loser.eliminated = true
    loser.points = 0 // Reset to 0 points for ELIM

    // Record ELIM status for the eliminated queen
    if (!gameState.episodePerformances[gameState.currentEpisode]) {
      gameState.episodePerformances[gameState.currentEpisode] = {}
    }
    gameState.episodePerformances[gameState.currentEpisode][loser.id] = "ELIM"
  } else {
    document.getElementById("lipsync-queen-2").classList.add("winner")
    // Only mark the loser as eliminated
    gameState.eliminatedQueens.push(gameState.lipsynQueen1)
    // Only mark the loser as eliminated
    const loser = gameState.queens.find((q) => q.id === gameState.lipsynQueen1.id)
    loser.eliminated = true
    loser.points = 0 // Reset to 0 points for ELIM

    // Record ELIM status for the eliminated queen
    if (!gameState.episodePerformances[gameState.currentEpisode]) {
      gameState.episodePerformances[gameState.currentEpisode] = {}
    }
    gameState.episodePerformances[gameState.currentEpisode][loser.id] = "ELIM"
  }

  // Show result
  const winner = queen1Wins ? gameState.lipsynQueen1 : gameState.lipsynQueen2
  const eliminated = queen1Wins ? gameState.lipsynQueen2 : gameState.lipsynQueen1

  // Update placement for eliminated queen
  const eliminatedQueen = gameState.queens.find((q) => q.id === eliminated.id)
  const remainingQueens = gameState.queens.filter((q) => !q.eliminated).length
  eliminatedQueen.placement = `${remainingQueens + 1}`

  setTimeout(() => {
    const lipsynResult = document.getElementById("lipsync-result")
    lipsynResult.innerHTML = `
          <h3>${winner.name}, shantay you stay!</h3>
          <p>${eliminated.name}, sashay away...</p>
          <p>${eliminated.name} finishes in ${eliminatedQueen.placement} place.</p>
        `
    lipsynResult.style.display = "block"

    document.getElementById("determine-winner").textContent = "Show Track Record"
    document.getElementById("determine-winner").onclick = showTrackRecord
  }, 1500)
}

// Helper function to get ordinal suffix
function getOrdinalSuffix(num) {
  const j = num % 10
  const k = num % 100
  if (j === 1 && k !== 11) {
    return "st"
  }
  if (j === 2 && k !== 12) {
    return "nd"
  }
  if (j === 3 && k !== 13) {
    return "rd"
  }
  return "th"
}

// Show track record
function showTrackRecord() {
  const trackRecordContainer = document.getElementById("track-record-container")

  // Create table
  let tableHTML = `
    <table class="track-record">
      <thead>
        <tr>
          <th>Queen</th>
          <th>TR</th>
          <th>Placement</th>
  `

  // Add episode columns
  for (let i = 1; i <= gameState.currentEpisode; i++) {
    tableHTML += `<th>EP ${i}</th>`
  }

  tableHTML += `
        </tr>
      </thead>
      <tbody>
  `

  // Sort queens by placement and then by points
  const sortedQueens = [...gameState.queens].sort((a, b) => {
    // Active queens first
    if (a.eliminated !== b.eliminated) {
      return a.eliminated ? 1 : -1
    }

    // If both are eliminated, sort by placement
    if (a.eliminated && b.eliminated) {
      // Extract the numeric part of the placement
      const aPlace = a.placement ? Number.parseInt(a.placement) : 999
      const bPlace = b.placement ? Number.parseInt(b.placement) : 999
      return aPlace - bPlace
    }

    // If both are active, sort by points
    return b.points - a.points
  })

  sortedQueens.forEach((queen) => {
    // Calculate average score (TR)
    const totalEpisodes =
      queen.wins + queen.highs + queen.safes + queen.lows + queen.bottoms + (queen.eliminated ? 1 : 0)
    const totalPoints = queen.wins * 5 + queen.highs * 4 + queen.safes * 3 + queen.lows * 2 + queen.bottoms * 1
    const avgScore = totalEpisodes > 0 ? (totalPoints / totalEpisodes).toFixed(2) : "0.00"

    // Display placement or N/A for active queens
    const placement = queen.eliminated ? queen.placement || "ELIM" : "N/A"

    tableHTML += `
      <tr>
        <td>${queen.name}</td>
        <td>${avgScore}</td>
        <td>${placement}</td>
    `

    // Add episode performances
    for (let i = 1; i <= gameState.currentEpisode; i++) {
      const performance = gameState.episodePerformances[i] && gameState.episodePerformances[i][queen.id]
      let cellClass = ""
      let cellText = "—"

      if (performance) {
        cellClass = performance.toLowerCase()
        cellText = performance
      }

      tableHTML += `<td class="${cellClass}">${cellText}</td>`
    }

    tableHTML += `</tr>`
  })

  tableHTML += `
      </tbody>
    </table>
  `

  trackRecordContainer.innerHTML = tableHTML

  showScreen(trackRecordScreen)
}

// Start next episode
function nextEpisode() {
  gameState.currentEpisode++

  // Check if we should go to finale (4 queens remaining)
  const activeQueens = gameState.queens.filter((queen) => !queen.eliminated)

  if (activeQueens.length <= 4) {
    startFinale()
  } else {
    showScreen(challengeScreen)
    announceChallenge()
  }
}

// Start finale
function startFinale() {
  const finalists = gameState.queens.filter((queen) => !queen.eliminated)
  gameState.finaleQueens = [...finalists]

  const finalistsContainer = document.getElementById("finalists-container")
  finalistsContainer.innerHTML = `
        <div class="announcement">
          <h3>Our Top ${finalists.length} Queens</h3>
          <p>After weeks of fierce competition, these queens have proven themselves worthy of the crown!</p>
        </div>
        <div class="queen-list">
          ${finalists
            .map(
              (queen) => `
            <div class="queen-card">
              <img src="${queen.imageUrl}" alt="${queen.name}" class="queen-image">
              <h3>${queen.name}</h3>
              <p><strong>Points:</strong> ${queen.points}</p>
              <p><strong>Track Record:</strong> ${queen.wins} WIN, ${queen.highs} HIGH, ${queen.safes} SAFE, ${queen.lows} LOW, ${queen.bottoms} BTM</p>
            </div>
          `,
            )
            .join("")}
        </div>
        <div class="announcement">
          <p>The queens will now compete in a series of lipsyncs for the crown!</p>
        </div>
      `

  // Create the finale bracket
  const finaleBracket = document.getElementById("finale-bracket")
  finaleBracket.innerHTML = ""

  // Sort finalists by points for seeding
  finalists.sort((a, b) => b.points - a.points)

  // Create semifinal matchups (1v4, 2v3)
  gameState.finalePairs = [
    [finalists[0], finalists[3] || finalists[0]], // In case there are only 3 finalists
    [finalists[1], finalists[2] || finalists[1]], // In case there are only 2 finalists
  ]

  // Display the bracket
  finaleBracket.innerHTML = `
        <div class="finale-round">
          <h3 class="section-title">Semi-Finals</h3>
          <div class="finale-matchup">
            <div class="finale-queen">
              <img src="${finalists[0].imageUrl}" alt="${finalists[0].name}" class="queen-image">
              <h3>${finalists[0].name}</h3>
              <p><strong>Points:</strong> ${finalists[0].points}</p>
            </div>
            <div class="versus">VS</div>
            <div class="finale-queen">
              <img src="${finalists[3] ? finalists[3].imageUrl : finalists[0].imageUrl}" alt="${finalists[3] ? finalists[3].name : "TBD"}" class="queen-image">
              <h3>${finalists[3] ? finalists[3].name : "TBD"}</h3>
              <p><strong>Points:</strong> ${finalists[3] ? finalists[3].points : "N/A"}</p>
            </div>
          </div>
          <div class="finale-matchup">
            <div class="finale-queen">
              <img src="${finalists[1].imageUrl}" alt="${finalists[1].name}" class="queen-image">
              <h3>${finalists[1].name}</h3>
              <p><strong>Points:</strong> ${finalists[1].points}</p>
            </div>
            <div class="versus">VS</div>
            <div class="finale-queen">
              <img src="${finalists[2] ? finalists[2].imageUrl : finalists[1].imageUrl}" alt="${finalists[2] ? finalists[2].name : "TBD"}" class="queen-image">
              <h3>${finalists[2] ? finalists[2].name : "TBD"}</h3>
              <p><strong>Points:</strong> ${finalists[2] ? finalists[2].points : "N/A"}</p>
            </div>
          </div>
        </div>
        <div class="finale-round">
          <h3 class="section-title">Final</h3>
          <div class="finale-matchup">
            <div class="finale-queen">TBD</div>
            <div class="versus">VS</div>
            <div class="finale-queen">TBD</div>
          </div>
        </div>
      `

  showScreen(finaleScreen)
}

// Start finale lipsyncs
function startFinaleLipsyncs() {
  gameState.finaleRound = 0
  gameState.currentFinalePair = 0
  startFinaleLipsync()
}

// Start a specific finale lipsync
function startFinaleLipsync() {
  const roundInfo = document.getElementById("finale-round-info")
  const song = lipsynSongs[Math.floor(Math.random() * lipsynSongs.length)]

  // Reset result display
  document.getElementById("finale-lipsync-result").style.display = "none"
  document.getElementById("determine-finale-winner").textContent = "Determine Winner"

  if (gameState.finaleRound === 0) {
    // Semifinals
    roundInfo.innerHTML = `Semi-Final ${gameState.currentFinalePair + 1}`
    document.getElementById("finale-lipsync-song").innerHTML = `
          <h3>Lipsync For The Finale</h3>
          <p>The song is ${song}</p>
        `

    const pair = gameState.finalePairs[gameState.currentFinalePair]
    const lipsynBattle = document.getElementById("finale-lipsync-battle")
    lipsynBattle.innerHTML = `
          <div class="lipsync-queen" id="finale-queen-1">
            <img src="${pair[0].imageUrl}" alt="${pair[0].name}" class="queen-image">
            <h3>${pair[0].name}</h3>
            <p>Preparing to slay...</p>
          </div>
          <div class="versus">VS</div>
          <div class="lipsync-queen" id="finale-queen-2">
            <img src="${pair[1].imageUrl}" alt="${pair[1].name}" class="queen-image">
            <h3>${pair[1].name}</h3>
            <p>Preparing to slay...</p>
          </div>
        `
  } else {
    // Final
    roundInfo.innerHTML = `Final Lipsync For The Crown`
    document.getElementById("finale-lipsync-song").innerHTML = `
          <h3>The Final Battle</h3>
          <p>The song is ${song}</p>
        `

    const lipsynBattle = document.getElementById("finale-lipsync-battle")
    lipsynBattle.innerHTML = `
          <div class="lipsync-queen" id="finale-queen-1">
            <img src="${gameState.finalePairs[0][0].imageUrl}" alt="${gameState.finalePairs[0][0].name}" class="queen-image">
            <h3>${gameState.finalePairs[0][0].name}</h3>
            <p>Preparing to slay...</p>
          </div>
          <div class="versus">VS</div>
          <div class="lipsync-queen" id="finale-queen-2">
            <img src="${gameState.finalePairs[1][0].imageUrl}" alt="${gameState.finalePairs[1][0].name}" class="queen-image">
            <h3>${gameState.finalePairs[1][0].name}</h3>
            <p>Preparing to slay...</p>
          </div>
        `
  }

  showScreen(finaleLipsynScreen)
}

// Determine finale lipsync winner
function determineFinaleWinner() {
  // Get the current pair
  const pair =
    gameState.finaleRound === 0
      ? gameState.finalePairs[gameState.currentFinalePair]
      : [gameState.finalePairs[0][0], gameState.finalePairs[1][0]]

  // Generate scores with some weighting based on points
  const queen1Points = pair[0].points
  const queen2Points = pair[1].points

  // Base scores (60-90) plus points bonus (0-10)
  const queen1Bonus = Math.min(10, Math.max(0, (queen1Points - queen2Points) / 5))
  const queen2Bonus = Math.min(10, Math.max(0, (queen2Points - queen1Points) / 5))

  const queen1Score = Math.floor(Math.random() * 31) + 60 + queen1Bonus
  const queen2Score = Math.floor(Math.random() * 31) + 60 + queen2Bonus

  // Determine performance level
  const getPerformanceLevel = (score) => {
    if (score >= 90) return "amazing"
    if (score >= 80) return "great"
    if (score >= 70) return "good"
    if (score >= 60) return "mediocre"
    return "bad"
  }

  const queen1Level = getPerformanceLevel(queen1Score)
  const queen2Level = getPerformanceLevel(queen2Score)

  // Get random descriptions
  const queen1Description =
    lipsynPerformances[queen1Level][Math.floor(Math.random() * lipsynPerformances[queen1Level].length)]
  const queen2Description =
    lipsynPerformances[queen2Level][Math.floor(Math.random() * lipsynPerformances[queen2Level].length)]

  // Update the lipsync battle display with scores and performances
  document.getElementById("finale-queen-1").innerHTML = `
        <img src="${pair[0].imageUrl}" alt="${pair[0].name}" class="queen-image">
        <h3>${pair[0].name}</h3>
        <div class="lipsync-score">${queen1Score}</div>
        <p class="lipsync-performance">${pair[0].name} ${queen1Description}</p>
      `

  document.getElementById("finale-queen-2").innerHTML = `
        <img src="${pair[1].imageUrl}" alt="${pair[1].name}" class="queen-image">
        <h3>${pair[1].name}</h3>
        <div class="lipsync-score">${queen2Score}</div>
        <p class="lipsync-performance">${pair[1].name} ${queen2Description}</p>
      `

  // Determine winner based on scores
  const queen1Wins = queen1Score >= queen2Score

  if (queen1Wins) {
    document.getElementById("finale-queen-1").classList.add("winner")
  } else {
    document.getElementById("finale-queen-2").classList.add("winner")
  }

  const winner = queen1Wins ? pair[0] : pair[1]

  setTimeout(() => {
    const finaleResult = document.getElementById("finale-lipsync-result")

    if (gameState.finaleRound === 0) {
      // Semifinals
      finaleResult.innerHTML = `
            <h3>${winner.name} advances to the final!</h3>
          `
      finaleResult.style.display = "block"

      // Store winner for finals
      gameState.finalePairs[gameState.currentFinalePair] = [winner]

      // Move to next semifinal or to finals
      if (gameState.currentFinalePair < gameState.finalePairs.length - 1) {
        document.getElementById("determine-finale-winner").textContent = "Next Semi-Final"
        document.getElementById("determine-finale-winner").onclick = () => {
          gameState.currentFinalePair++
          startFinaleLipsync()
        }
      } else {
        document.getElementById("determine-finale-winner").textContent = "Proceed to Final"
        document.getElementById("determine-finale-winner").onclick = () => {
          gameState.finaleRound = 1
          // Make sure we're using the winners from each semifinal
          startFinaleLipsync()
        }
      }
    } else {
      // Final - crown the winner
      finaleResult.innerHTML = `
            <h3>${winner.name} is the winner of the season!</h3>
          `
      finaleResult.style.display = "block"

      gameState.winner = winner

      // Set placement for runner-up
      const runnerUp = queen1Wins ? pair[1] : pair[0]
      const runnerUpQueen = gameState.queens.find((q) => q.id === runnerUp.id)
      runnerUpQueen.placement = "2nd"

      // Set placement for 3rd/4th place
      const semifinalists = gameState.finaleQueens.filter(
        (q) => q.id !== gameState.finalePairs[0][0].id && q.id !== gameState.finalePairs[1][0].id,
      )

      semifinalists.forEach((queen) => {
        const queenObj = gameState.queens.find((q) => q.id === queen.id)
        queenObj.placement = semifinalists.length > 1 ? "3rd/4th" : "3rd"
      })

      // Set placement for winner
      const winnerQueen = gameState.queens.find((q) => q.id === winner.id)
      winnerQueen.placement = "1st"

      document.getElementById("determine-finale-winner").textContent = "Crown the Winner"
      document.getElementById("determine-finale-winner").onclick = showWinner
    }
  }, 1500)
}

// Show the winner
function showWinner() {
  // Create confetti
  createConfetti()

  const winnerAnnouncement = document.getElementById("winner-announcement")
  winnerAnnouncement.innerHTML = `
        <div class="announcement">
          <h3>The Winner Is...</h3>
        </div>
        <div class="queen-card winner">
          <img src="${gameState.winner.imageUrl}" alt="${gameState.winner.name}" class="queen-image">
          <h3>${gameState.winner.name}</h3>
          <p>Condragulations, you are the winner of this season!</p>
          <p><strong>Points:</strong> ${gameState.winner.points}</p>
          <p><strong>Track Record:</strong> ${gameState.winner.wins} WIN, ${gameState.winner.highs} HIGH, ${gameState.winner.safes} SAFE, ${gameState.winner.lows} LOW, ${gameState.winner.bottoms} BTM</p>
        </div>
        
        <h3 class="section-title">Final Placements</h3>
        <div class="track-record-container">
          ${generateFinalPlacementsTable()}
        </div>
      `

  showScreen(winnerScreen)
}

// Generate final placements table
function generateFinalPlacementsTable() {
  let tableHTML = `
        <table class="track-record">
          <thead>
            <tr>
              <th>Placement</th>
              <th>Queen</th>
              <th>Track Record</th>
            </tr>
          </thead>
          <tbody>
      `

  // Sort queens by placement
  const sortedQueens = [...gameState.queens].sort((a, b) => {
    // Eliminated queens go last
    if (a.eliminated !== b.eliminated) {
      return a.eliminated ? 1 : -1
    }

    // Sort by placement if available
    if (a.placement && b.placement) {
      return a.placement.localeCompare(b.placement)
    }

    // Otherwise, maintain original order
    return 0
  })

  sortedQueens.forEach((queen) => {
    tableHTML += `
          <tr>
            <td>${queen.placement || "Eliminated"}</td>
            <td>${queen.name}</td>
            <td>${queen.wins} WIN, ${queen.highs} HIGH, ${queen.safes} SAFE, ${queen.lows} LOW, ${queen.bottoms} BTM</td>
          </tr>
        `
  })

  tableHTML += `
          </tbody>
        </table>
      `

  return tableHTML
}

// Create confetti
function createConfetti() {
  const colors = ["#f0f", "#0ff", "#ff0", "#fff"]

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div")
    confetti.className = "confetti"
    confetti.style.left = `${Math.random() * 100}vw`
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    confetti.style.animationDelay = `${Math.random() * 5}s`
    document.body.appendChild(confetti)
  }
}

// Restart the game
function restartGame() {
  // Reset game state
  gameState = {
    queens: [],
    currentEpisode: 1,
    currentChallenge: null,
    currentRunway: null,
    isRunwayChallenge: false,
    performances: [],
    placements: {},
    bottomQueens: [],
    lipsynQueen1: null,
    lipsynQueen2: null,
    eliminatedQueens: [],
    winner: null,
    relationships: {},
    episodePerformances: {},
    finaleQueens: [],
    finalePairs: [],
    finaleRound: 0,
    currentFinalePair: 0,
  }

  // Remove confetti
  document.querySelectorAll(".confetti").forEach((confetti) => confetti.remove())

  // Show setup screen
  showScreen(setupScreen)
  generateQueenInputs()
}

// Helper function to show a screen and hide others
function showScreen(screenToShow) {
  const screens = document.querySelectorAll(".screen")
  screens.forEach((screen) => screen.classList.remove("active"))
  screenToShow.classList.add("active")
}
