# Perception Test app

## What?

This is a test interface for sounds developed as part of a project within a course at KTH named Human Perception for Information Technology (DM2350). It was developed to test for participants perception of groove in different music examples where rhytmic micro deviations are a variable.

However, it should be able to work for other experiments where pre-fixed audio tracks are to be reviewed by subjects.

For maximal ease of use, this app is 100% client-based, it does not depend on any server to run. Data storage is achieved with Firebase. Due to the projects relative simplicity, quite simple Javascript was used: Jquery, JqueryUI and Media Element-media player.

### Todo-list


7. Write a Data retrieval function
8. Generalize the Slider-functions, i.e., the test runners can truly enter any number of parameters to test for. 

### Finished stuff

1. Hardcorded, fully workable prototype
1. Implement Sliders and read values + push to Firebase
2. Implement templates, tests & finish-survey
3. Implement finish-survey
4. Implement routing/generation of instances
5. Fix the audio-player, forcing participants to listen to the whole sound before giving their ratings. Also hiding the next button as well as the pause and/or fast forward.
6. Fix formatting on Instructions Page 