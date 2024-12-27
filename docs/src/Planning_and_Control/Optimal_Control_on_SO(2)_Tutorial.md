# Optimal Linear Control on the SO(2) Manifold Using Lie Algebras and Auto-Differentiation

A tutorial / nice into to Lie algebras applied to control theory.

![](/img/lie_cover.jpeg "Lie algebras")

* * *

[Check out the paper!](https://andrewtorgesen.com/res/Lie%20LQR%20SO2.pdf) That's where the good stuff is.

* * *

**Abstract:** Many interesting problems in robotics and control entail dealing with extensive usage of rigid body transformations in the formulation of the dynamics of systems and their corresponding controllers. Expressing these transformations adequately can pose a challenge. In particular, rotational transforms cannot be described globally in the language of vector spaces. Thus, control formulations dealing with rotational transforms often have to resort to programmatic “hacks” such as angle wrapping and quaternion normalization to maintain a feasible control strategy. Additionally, deriving the equations of motion of complex systems with rigid body transformations for control often proves to be a cumbersome process. This project briefly reviews the mathematical foundations and applications of Lie Algebras and auto-differentiation to control theory. Lie Algebras are becoming increasingly popular, particularly in applications leveraging computer vision. Auto-differentiation has proved to be a useful and efficient alternative to calculating analytical derivatives for control. These technologies are applied to the formulation and simulation of a linear quadratic regulation (LQR) control strategy on the SO(2) manifold.
