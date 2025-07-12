'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Dashboard() {
  const [bmi, setBmi] = useState([22])
  const [physicalActivity, setPhysicalActivity] = useState([5])
  const [sleepHours, setSleepHours] = useState([7])

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Health Dashboard</h1>
        
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Sliders */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Health Metrics</CardTitle>
                <CardDescription>Adjust your current health parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* BMI Slider */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    BMI (Healthy Weight): {bmi[0]}
                  </label>
                  <Slider
                    value={bmi}
                    onValueChange={setBmi}
                    min={15}
                    max={40}
                    step={0.1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>15</span>
                    <span>40</span>
                  </div>
                </div>

                {/* Physical Activity Slider */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Physical Activity (hours/week): {physicalActivity[0]}
                  </label>
                  <Slider
                    value={physicalActivity}
                    onValueChange={setPhysicalActivity}
                    min={0}
                    max={20}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0</span>
                    <span>20</span>
                  </div>
                </div>

                {/* Sleep Hours Slider */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Hours of Sleep: {sleepHours[0]}
                  </label>
                  <Slider
                    value={sleepHours}
                    onValueChange={setSleepHours}
                    min={3}
                    max={12}
                    step={0.5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>3</span>
                    <span>12</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Button */}
            <Button className="w-full" size="lg">
              Visit Dr. Jones
            </Button>
          </div>

          {/* Middle Column - Health Cards */}
          <div className="space-y-4">
            {/* Life Expectancy */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Life Expectancy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-1">82.5 years</div>
                <div className="text-sm text-muted-foreground">CI: 78-87 years</div>
                <div className="text-xs text-muted-foreground mt-1">Based on 15 studies</div>
              </CardContent>
            </Card>

            {/* Cardiovascular Risk */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">10-Year Cardiovascular Risk</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-bold text-orange-600">12%</div>
                  <Progress value={12} className="flex-1" />
                </div>
              </CardContent>
            </Card>

            {/* Energy Levels */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Energy Levels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Badge variant="outline">Low</Badge>
                  <Badge variant="default">Medium</Badge>
                  <Badge variant="outline">High</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Metabolic Disease Risk */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Metabolic Disease Risk</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-100">Low</Badge>
                  <Badge variant="outline">Medium</Badge>
                  <Badge variant="outline">High</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Cognitive Disease Risk */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Cognitive Disease Risk</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Badge variant="outline">Low</Badge>
                  <Badge variant="secondary">Medium</Badge>
                  <Badge variant="outline">High</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Empty for now */}
          <Card>
            <CardHeader>
              <CardTitle className="text-muted-foreground">Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">This section will be populated later</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}