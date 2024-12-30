// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> Andrew&#39;s Projects</a></li><li class="chapter-item expanded "><a href="Planning_and_Control/Planning_and_Control.html"><strong aria-hidden="true">2.</strong> Planning and Control</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Planning_and_Control/Multi-Agent_Air_Hockey.html"><strong aria-hidden="true">2.1.</strong> Multi-Agent Air Hockey</a></li><li class="chapter-item expanded "><a href="Planning_and_Control/Optimal_Control_on_SO(2)_Tutorial.html"><strong aria-hidden="true">2.2.</strong> Optimal Control on SO(2) Tutorial</a></li><li class="chapter-item expanded "><a href="Planning_and_Control/Proportional_Navigation_on_a_UAV.html"><strong aria-hidden="true">2.3.</strong> Proportional Navigation on a UAV</a></li><li class="chapter-item expanded "><a href="Planning_and_Control/Minimum-Snap_Trajectories_with_Error-state-LQR_Control.md.html"><strong aria-hidden="true">2.4.</strong> Minimum-Snap Trajectories with Error-state-LQR Control</a></li><li class="chapter-item expanded "><a href="Planning_and_Control/Inverted_Pendulum_Dynamic_Programming.html"><strong aria-hidden="true">2.5.</strong> Inverted Pendulum Dynamic Programming</a></li><li class="chapter-item expanded "><a href="Planning_and_Control/Genetic_Algorithm-Based_UAV_Path_Planner.html"><strong aria-hidden="true">2.6.</strong> Genetic Algorithm-Based UAV Path Planner</a></li><li class="chapter-item expanded "><a href="Planning_and_Control/Apollo_Spacecraft_Control.html"><strong aria-hidden="true">2.7.</strong> Apollo Spacecraft Control</a></li><li class="chapter-item expanded "><a href="Planning_and_Control/Board_Balancing.html"><strong aria-hidden="true">2.8.</strong> Board Balancing</a></li></ol></li><li class="chapter-item expanded "><a href="Miscellaneous/Miscellaneous.html"><strong aria-hidden="true">3.</strong> Miscellaneous</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Miscellaneous/Budget_Visualizer.html"><strong aria-hidden="true">3.1.</strong> Budget Visualizer</a></li><li class="chapter-item expanded "><a href="Miscellaneous/3D_iPhone_Path_Viewer.html"><strong aria-hidden="true">3.2.</strong> 3D iPhone Path Viewer</a></li></ol></li><li class="chapter-item expanded "><a href="Systems/Systems.html"><strong aria-hidden="true">4.</strong> Systems</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Systems/Fixed-Wing_MAV_Sim.html"><strong aria-hidden="true">4.1.</strong> Fixed-Wing MAV Sim</a></li><li class="chapter-item expanded "><a href="Systems/Unmanned_Aircraft_Competition.html"><strong aria-hidden="true">4.2.</strong> Unmanned Aircraft Competition</a></li><li class="chapter-item expanded "><a href="Systems/ROS_Ground_Station.html"><strong aria-hidden="true">4.3.</strong> ROS Ground Station</a></li></ol></li><li class="chapter-item expanded "><a href="Perception_and_Estimation/Perception_and_Estimation.html"><strong aria-hidden="true">5.</strong> Perception and Estimation</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Perception_and_Estimation/Multi-agent_SLAM_for_Radiological_Search.html"><strong aria-hidden="true">5.1.</strong> Multi-agent SLAM for Radiological Search</a></li><li class="chapter-item expanded "><a href="Perception_and_Estimation/Real-Time_Semantic_Segmentation.html"><strong aria-hidden="true">5.2.</strong> Real-Time Semantic Segmentation</a></li><li class="chapter-item expanded "><a href="Perception_and_Estimation/Ceres_Solver_Tutorial.html"><strong aria-hidden="true">5.3.</strong> Ceres Solver Tutorial</a></li><li class="chapter-item expanded "><a href="Perception_and_Estimation/Robot_Arm_Particle_Filter.html"><strong aria-hidden="true">5.4.</strong> Robot Arm Particle Filter</a></li><li class="chapter-item expanded "><a href="Perception_and_Estimation/Camera_Extrinsics_Calibration.html"><strong aria-hidden="true">5.5.</strong> Camera Extrinsics Calibration</a></li><li class="chapter-item expanded "><a href="Perception_and_Estimation/Ship_Airwake_Measurement_System.html"><strong aria-hidden="true">5.6.</strong> Ship Airwake Measurement System</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
