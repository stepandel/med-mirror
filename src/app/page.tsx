'use client'

import { useState, useEffect } from 'react'
import Link from "next/link";

const steps = [
  'Pull your medical records',
  'Load your health data',
  'Analyze the health data',
  'Generate SMASH model',
  'Build med mirror',
  'Identify primary physician'
]

function BuildProcess({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCompletedSteps(prev => [...prev, currentStep])
        if (currentStep === steps.length - 1) {
          setIsComplete(true)
          onComplete()
        } else {
          setCurrentStep(prev => prev + 1)
        }
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [currentStep, onComplete])

  const getStepStatus = (index: number) => {
    if (completedSteps.includes(index)) return 'completed'
    if (index === currentStep) return 'current'
    return 'pending'
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Building Your Med Mirror</h2>
        <p className="text-lg text-gray-600">Please wait while we process your health data...</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-6">
          {steps.map((step, index) => {
            const status = getStepStatus(index)
            
            return (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {status === 'completed' ? (
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  ) : status === 'current' ? (
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-500 text-sm font-medium">{index + 1}</span>
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <p className={`text-lg font-medium ${
                    status === 'completed' ? 'text-green-700' :
                    status === 'current' ? 'text-blue-700' :
                    'text-gray-500'
                  }`}>
                    {step}
                  </p>
                  {status === 'current' && (
                    <p className="text-sm text-gray-500 mt-1">Processing...</p>
                  )}
                  {status === 'completed' && (
                    <p className="text-sm text-green-600 mt-1">Complete</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8">
          <div className="bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(completedSteps.length / steps.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            {completedSteps.length} of {steps.length} steps completed
          </p>
        </div>

        {isComplete && (
          <div className="mt-8 text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                🎉 Your Med Mirror is Ready!
              </h3>
              <p className="text-green-700">
                We've successfully analyzed your health data and built your personalized medical mirror.
              </p>
            </div>
            
            <Link href="/dashboard">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-200 shadow-lg hover:shadow-xl">
                Check out your med mirror
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Home() {
  const [showBuildProcess, setShowBuildProcess] = useState(false)
  const [buildComplete, setBuildComplete] = useState(false)

  const handleStartBuild = () => {
    setShowBuildProcess(true)
  }

  const handleBuildComplete = () => {
    setBuildComplete(true)
  }

  if (showBuildProcess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
        <BuildProcess onComplete={handleBuildComplete} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-8">Med Mirror</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Visualize your health journey with personalized insights and predictions
        </p>
        <button 
          onClick={handleStartBuild}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-xl transition duration-200 shadow-lg hover:shadow-xl"
        >
          Build your med mirror
        </button>
      </div>
    </div>
  );
}
