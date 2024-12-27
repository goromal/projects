# Proportional Navigation Applied to Ground Target Tracking

Application for a multi-rotor simulation sandbox. I coded this up over a couple of evenings on a family vacation one year to test some simulation, controls, and visualization code.

One random bit of this project that I'm weirdly proud of is that I had written some code to analyze curvy paths that I would draw on my iPad and turn that path into the ground vehicle simulation that you see in the image and videos below.

[Proportional navigation](https://en.wikipedia.org/wiki/Proportional_navigation) calculations are used to try to get the UAV to intercept the moving ground vehicle, and [simple potential fields](https://www.cs.cmu.edu/~./motionplanning/papers/sbp_papers/integrated1/borenstein_potential_field_limitations.pdf) are used to have the UAV concurrently avoid the cylinders.

![](/img/ProNavUAV.png "Proportional navigation")

<iframe width="420" height="315" src="https://www.youtube.com/embed/RxqNI8_ko_M" frameborder="0" allowfullscreen></iframe>

<iframe width="420" height="315" src="https://www.youtube.com/embed/0sF9nGATwAc" frameborder="0" allowfullscreen></iframe>
