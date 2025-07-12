'use client'

import { useState } from 'react'

export default function Dashboard() {
  const [bmi, setBmi] = useState(22)
  const [physicalActivity, setPhysicalActivity] = useState(5)
  const [sleepHours, setSleepHours] = useState(7)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Health Dashboard</h1>
        
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Sliders */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-6">Health Metrics</h2>
              
              {/* BMI Slider */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  BMI (Healthy Weight): {bmi}
                </label>
                <input
                  type="range"
                  min="15"
                  max="40"
                  value={bmi}
                  onChange={(e) => setBmi(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>15</span>
                  <span>40</span>
                </div>
              </div>

              {/* Physical Activity Slider */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Physical Activity (hours/week): {physicalActivity}
                </label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={physicalActivity}
                  onChange={(e) => setPhysicalActivity(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0</span>
                  <span>20</span>
                </div>
              </div>

              {/* Sleep Hours Slider */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hours of Sleep: {sleepHours}
                </label>
                <input
                  type="range"
                  min="3"
                  max="12"
                  value={sleepHours}
                  onChange={(e) => setSleepHours(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>3</span>
                  <span>12</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200">
              Visit Dr. Jones
            </button>
          </div>

          {/* Middle Column - Health Cards */}
          <div className="space-y-4">
            {/* Age of Death */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Life Expectancy</h3>
              <div className="text-2xl font-bold text-blue-600">82.5 years</div>
              <div className="text-sm text-gray-600">CI: 78-87 years</div>
              <div className="text-xs text-gray-500 mt-1">Based on 15 studies</div>
            </div>

            {/* Cardiovascular Risk */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">10-Year Cardiovascular Risk</h3>
              <div className="flex items-center">
                <div className="text-2xl font-bold text-orange-600">12%</div>
                <div className="ml-2 flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{width: '12%'}}></div>
                </div>
              </div>
            </div>

            {/* Energy Levels */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Energy Levels</h3>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-sm">Low</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm font-medium">Medium</span>
                <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-sm">High</span>
              </div>
            </div>

            {/* Metabolic Disease Risk */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Metabolic Disease Risk</h3>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">Low</span>
                <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-sm">Medium</span>
                <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-sm">High</span>
              </div>
            </div>

            {/* Cognitive Disease Risk */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cognitive Disease Risk</h3>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-sm">Low</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm font-medium">Medium</span>
                <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-sm">High</span>
              </div>
            </div>
          </div>

          {/* Right Column - Empty for now */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-400 mb-4">Coming Soon</h2>
            <p className="text-gray-400">This section will be populated later</p>
          </div>
        </div>
      </div>
    </div>
  )
}