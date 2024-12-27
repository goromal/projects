# Ceres Solver Tutorial

Tutorial and experiments in pose graph optimization (PGO) with Ceres.

**[Try out the tutorial!](https://andrewtorgesen.com/notes/Autonomy/Systems_Implementation/Optimization_Libraries/Ceres_Solver_Python_Tutorial.html)**

![](/img/pgo.png "Pose Graph Optimization")

I completed this personal project in my free time while in graduate school, where part of my research involved multi-agent collaborative localization and mapping. One of the most popular backend optimizers for simultaneous localization and mapping (SLAM) is [Ceres Solver](http://ceres-solver.org/), Google's nonlinear least squares solver. Ceres is a C++ library, but in the interest of rapid prototyping multi-agent SLAM scenarios, I contributed to some [open source Python bindings](https://github.com/Edwinem/ceres_python_bindings) for the solver and also made Python wrappers of my C++ geometry library and corresponding [measurement factor implementations](https://github.com/goromal/ceres-factors). 

With these Python bindings, I took things one step further and wrote up [this tutorial with several robotics estimation examples](https://andrewtorgesen.com/notes/Autonomy/Systems_Implementation/Optimization_Libraries/Ceres_Solver_Python_Tutorial.html) with the two-fold goal of teaching my lab mates about Ceres and learning more of the nuanced details of the library. I put together the slides above to present the tutorial to my lab, introducing the challenges of optimization on the manifold and how Ceres can be used to solve SLAM-related problems. The presentation sparked interest from the lab, and one research project actually subsequently incorporated the Python wrappers into its SLAM algorithm prototyping efforts. The libraries I developed for this effort have continued to be useful in my personal projects through the years, validating the original effort I invested into their documentation and correctness.
