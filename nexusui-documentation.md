
  <div id="tune" class="custom-tutorial" style="display:none">
    <h2>Tuning</h2>

    <p>
      <b>Nexus.note()</b> and <b>Nexus.tune</b> offer ways to manage pitches and scales.
    </p>

     <pre><code class="language-javascript">
// Nexus.note(0) returns the frequency of the 1st note of the scale
synth.frequency.value = Nexus.note(0);

// Nexus.note(2) returns the frequency of the 3rd note of the scale
synth.frequency.value = Nexus.note(2);
     </code></pre>

    <p>
      By default the scale is an equal-tempered major scale. An API for changing the scale is below.
    </p>

     <p>
       This approach emphasizes algorithmic composition by using numbers to traverse musical scales.
     </p>


    <!-- section -->

    <h3>Turning Scale Degrees to Frequency Values</h3>
     <p>
       <b>Nexus.note()</b> provides a method for turning scale degrees into frequency values which your web audio synth will understand.
     </p>

     <pre>
       <code class="language-javascript">
// Nexus.note(0) returns the frequency of 1st note of the scale
synth.frequency.value = Nexus.note(0);

// Nexus.note(1) returns the frequency of 2nd note of the scale
synth.frequency.value = Nexus.note(1);

// Negative numbers wrap to a lower octave
// Nexus.note(-1) returns the frequency of the top note of the scale, 1 octave lower
synth.frequency.value = Nexus.note(-1);

// You can also specify the octave using an optional second parameter
// Nexus.note(0,2) returns the frequency of the 1st note of the scale, 2 octaves up.
synth.frequency.value = Nexus.note(0,2);

// Nexus.note(0,-1) returns the frequency of the 1st note of the scale, 1 octave lower
synth.frequency.value = Nexus.note(0,-1);
    </code></pre>

     <p>
       By using counters or number generators in tandem with <b>Nexus.note()</b>, you can play scales, arpeggios, etc.
     </p>

     <pre>
       <code class="language-javascript">
 // Play 5 octaves of the major scale

 var counter = new Nexus.Counter( 0, 36 );

 var beat = new Nexus.Interval(200,function() {
   synth.frequency.value = Nexus.note( counter.next() );
 })
       </code>
     </pre>




     <h3>Getting Pitch Ratios or adjusted MIDI values</h3>
     <p>
       If working with an audio sample, you may wish to tune your sample by changing its playback speed.

       You can use <b>Nexus.tune.ratio()</b> to get the frequency ratio of a note to the root of your scale. This ratio can be used to set the playback speed of your sample.

      <pre>
        <code class="language-javascript">
// This gives you the pitch ratio between the 5th note in scale and the root.
Nexus.tune.ratio(4)  // returns 1.49830693925

// You can use this to set the playback speed of a sampler
sampler.playbackRate = Nexus.tune.ratio(4)
        </code>
      </pre>

     </p>



    <h3>Changing the Scale</h3>
    <p>
      By default, the scale is an equal-tempered major scale.
    </p>
    <p>
      We do not provide any other built-in scales. However, we provide two ways for you to create your own scale.
    </p>

    <h4>Describing a Scale</h4>

    To define your own scale, you can call <b>.createScale()</b> with a list of the chromatic scale degrees you want in your scale.

    <pre><code class="language-javascript">
// Create a minor scale
Nexus.tune.createScale(0,2,3,5,7,8,10);

// Now, Nexus.note() will refer to the scale you defined
Nexus.note(0) // returns the frequency number of the root
Nexus.note(1) // returns the frequency number of a Major 2nd
Nexus.note(2) // returns the frequency number of a Minor 3rd
    </code></pre>


    <h4>Describing a Just Intonation Scale</h4>

    You can also define <a href="https://en.wikipedia.org/wiki/Just_intonation">just intonation</a> scales.

    To do so, call <b>.createJIScale()</b> with your own list of pitch ratios.

    <pre><code class="language-javascript">
// Create a major scale in just intonation
Nexus.tune.createJIScale( 1/1, 9/8, 5/4, 4/3, 3/2, 8/5, 5/3, 15/8 );


// Now, Nexus.note() will refer to the scale you defined
Nexus.note(0) // returns the frequency number for ratio 1/1
Nexus.note(1) // returns the frequency number for ratio 9/8
Nexus.note(2) // returns the frequency number for ratio 5/4
    </code></pre>



    <h3>Changing the root </h3>
    <p>
      By default, the root of the scale is Middle C. Therefore, <b>Nexus.note(0)</b> returns the frequency for Middle C.
    </p>

    <p>
      You can set the root using <b>Nexus.tune.root</b>, which is a frequency value.
    </p>

    <pre><code class="language-javascript">
// Set the root to 3 octaves below Middle C.
Nexus.tune.root = Nexus.note(0,-3);
    </code></pre>

    In this way, you can change your scale root on the fly by setting it to other notes of the scale you are currently using.

    <p>
      The root can also be set using traditional musical values like "C3" or "A1". This is the only place in this toolkit where this type of music notation is used.
    </p>

    <pre><code class="language-javascript">
// Set the root to low A.
Nexus.tune.root = "A1";
    </code></pre>


    <p>
      You can also set Nexus.tune.root direction to a frequency value, for example if you are working in Just Intonation.
    </p>

    <pre><code class="language-javascript">
// Set the root of your scale to 120hz.
Nexus.tune.root = 120;
    </code></pre>
