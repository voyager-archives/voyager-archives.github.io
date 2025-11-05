var headerTemplate = `
<link rel="stylesheet" href="https://voyager-archives.github.io/resources/css/header.css"></link>
<a href="https://voyager-archives.github.io/"><img class="header-image" src="https://voyager-archives.github.io/resources/images/logo.png" height="100px"></a>
<h1 class="header-title-h1">The Voyager Archives</h1>
<ul>
    <li><a href="https://voyager-archives.github.io/history.html"><span>History</span></a></li>
    <li><a href="https://voyager-archives.github.io/stories.html"><span>Stories</span></a></li>
    <li class="dropdown">
        <div class="header-dropdown-content">
            <a href="https://voyager-archives.github.io/Simulator/training.html">Training</a>
            <a href="https://voyager-archives.github.io/Simulator/types.html">Types</a>
            <a href="https://voyager-archives.github.io/Simulator/builds.html">Builds</a>
        </div>
    </li>
    <li>
        <a href="https://www.youtube.com/channel/UCCK6eKNzxMS_acFr8BqnhOQ/featured" class="dropbtn">Podcast</a>
    </li>
    <li class="dropdown">
        <a href="https://voyager-archives.github.io/DIY/index.html" class="dropbtn">DIY</a>
        <div class="header-dropdown-content">
            <a href="https://voyager-archives.github.io/DIY/Bridge-Design-Construction/index.html">Bridge Design / Construction</a>
            <a href="https://voyager-archives.github.io/DIY/Controls/index.html">Controls</a>
            <a href="https://voyager-archives.github.io/DIY/Costumes/index.html">Costumes</a>
            <a href="https://voyager-archives.github.io/DIY/Graphic-Design/index.html">Graphic Design</a>
            <a href="https://voyager-archives.github.io/DIY/Lighting/index.html">Lighting</a>
            <a href="https://voyager-archives.github.io/DIY/Music/index.html">Music</a>
            <a href="https://voyager-archives.github.io/DIY/Panels/index.html">Panels</a>
            <a href="https://voyager-archives.github.io/DIY/Programming/index.html">Programming</a>
            <a href="https://voyager-archives.github.io/DIY/Props/index.html">Props</a>
            <a href="https://voyager-archives.github.io/DIY/Running-the-Simulation/index.html">Running the Simulation</a>
            <a href="https://voyager-archives.github.io/DIY/Sound-Effects/index.html">Sound Effects</a>
            <a href="https://voyager-archives.github.io/DIY/Sound-System/index.html">Sound System</a>
            <a href="https://voyager-archives.github.io/DIY/Tips-Tricks-and-Tools/index.html">Tips, Tricks and Tools</a>
            <a href="https://voyager-archives.github.io/DIY/Video-System/index.html">Video System</a>
            <a href="https://voyager-archives.github.io/DIY/Writing-Missions/index.html">Writing Missions</a>
            <a href="https://voyager-archives.github.io/DIY/Media/index.html">Media</a>
        </div>
    </li>
    <li class="dropdown">
        <a href="https://voyager-archives.github.io/Get-Involved/index.html" class="dropbtn">Get Involved</a>
        <div class="header-dropdown-content">
            <a href="https://voyager-archives.github.io/Get-Involved/donate.html">Donate</a>
            <a href="https://voyager-archives.github.io/Get-Involved/open-source-programming.html">Open Source Programming</a>
            <a href="https://voyager-archives.github.io/Get-Involved/volunteering.html">Volunteering</a>
        </div>
    </li>
</ul>

<button class="menu-toggle">☰</button>
<nav>
    <ul>
        <li><a href="https://voyager-archives.github.io/history.html">History</a></li>
        <li><a href="https://voyager-archives.github.io/stories.html">Stories</a></li>
        <li class="dropdown">
            <a href="#" class="dropbtn">Simulator</a>
            <div class="header-dropdown-content">
                <a href="https://voyager-archives.github.io/Simulator/training.html">Training</a>
                <a href="https://voyager-archives.github.io/Simulator/types.html">Types</a>
                <a href="https://voyager-archives.github.io/Simulator/builds.html">Builds</a>
            </div>
        </li>
        <li><a href="https://www.youtube.com/channel/UCCK6eKNzxMS_acFr8BqnhOQ/featured" class="dropbtn">Podcast</a></li>
        <li class="dropdown">
            <a href="#" class="dropbtn">DIY</a>
            <div class="header-dropdown-content">
                <a href="https://voyager-archives.github.io/DIY/index.html">DIY</a>
                <a href="https://voyager-archives.github.io/DIY/Bridge-Design-Construction/index.html">Bridge Design / Construction</a>
                <a href="https://voyager-archives.github.io/DIY/Controls/index.html">Controls</a>
                <a href="https://voyager-archives.github.io/DIY/Costumes/index.html">Costumes</a>
            </div>
        </li>
        <li class="dropdown">
            <a href="#" class="dropbtn">Get Involved</a>
            <div class="header-dropdown-content">
                <a href="https://voyager-archives.github.io/Get-Involved/donate.html">Donate</a>
                <a href="https://voyager-archives.github.io/Get-Involved/open-source-programming.html">Open Source Programming</a>
                <a href="https://voyager-archives.github.io/Get-Involved/volunteering.html">Volunteering</a>
            </div>
        </li>
    </ul>
</nav>
<script>
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

</script>
`;