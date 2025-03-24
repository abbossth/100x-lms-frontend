import React from 'react'

const Dashboard = () => {
    return (
        <>
                <div class="text">Dashboard</div>
                <div class="modules-container">
                    <div class="module-card">
                        <h3 class="module-title">Web Development</h3>
                        <p class="module-info">Darslar soni: 25</p>
                        <a href="modules.html" class="module-link">Boshlash</a>
                    </div>
                    <div class="module-card">
                        <h3 class="module-title">Python Programming</h3>
                        <p class="module-info">Darslar soni: 18</p>
                        <a href="modules.html" class="module-link">Boshlash</a>
                    </div>
                    <div class="module-card">
                        <h3 class="module-title">UI/UX Design</h3>
                        <p class="module-info">Darslar soni: 12</p>
                        <a href="modules.html" class="module-link">Boshlash</a>
                    </div>
                    <div class="module-card">
                        <h3 class="module-title">Data Science</h3>
                        <p class="module-info">Darslar soni: 20</p>
                        <a href="modules.html" class="module-link">Boshlash</a>
                    </div>
                </div>
        </>
    )
}

export default Dashboard