import simpleLandingPage from "../assets/images/simpleLandingPage.png"
import employeePayrollTracker from "../assets/images/employeePayrollTracker.png"
import twoPageBlog from "../assets/images/twoPageBlog.png"
import taskManager from "../assets/images/taskManager.png"

export default function Portfolio() {
    return (
        <>
        <div className="sections">
            <h1>Portfolio</h1>
            <div className="container">
                <div className="projects">
                    <a href="https://jorge-baldovinos.github.io/Simple-Landing-Page/"><img src={simpleLandingPage} alt="Simple Landing Page" /></a>
                    <a href="https://jorge-baldovinos.github.io/Employee-Payroll-Tracker/"><img src={employeePayrollTracker} alt="Employee Payroll Tracker" /></a>
                    <a href="https://jorge-baldovinos.github.io/Two-Page-Blog/index.html"><img src={twoPageBlog} alt="Two Page Blog" /></a>
                    <a href="https://jorge-baldovinos.github.io/project-management-application/"><img src={taskManager} alt="Task Manager" /></a>
                </div>
            </div>
        </div>
        </>
    )
}