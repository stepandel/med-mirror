"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import ImageUpload from "@/components/ImageUpload";
import smashData from "./smash.json";

export default function Dashboard() {
  // Calculate health metrics from smash.json data
  const exerciseRating = smashData.social_history.exercise.rating; // Estimated hours per week
  const sleepRating = smashData.social_history.sleep.rating; // Servings per day
  const alcoholIntake = smashData.social_history.alcohol.rating; // Drinks per week

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Med Mirror</h1>

        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Health Metrics Bars */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Health Metrics</CardTitle>
                <CardDescription>
                  Current health parameters from your profile
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Exercise Level */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium">
                      Exercise Level
                    </label>
                  </div>
                  <Progress value={exerciseRating * 10} className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0 hrs</span>
                    <span>≥20 hrs</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {smashData.social_history.exercise.description}
                  </p>
                </div>

                {/* Caffeine Intake */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium">
                      Sleep Hours
                    </label>
                  </div>
                  <Progress value={sleepRating * 10} className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0 hrs</span>
                    <span>8+ hrs</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {smashData.social_history.sleep.description}
                  </p>
                </div>

                {/* Alcohol Consumption */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium">
                      Alcohol Consumption
                    </label>
                  </div>
                  <Progress value={alcoholIntake * 10} className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0</span>
                    <span>14+ drinks</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {smashData.social_history.alcohol.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CTA Button */}
            <Button className="w-full" size="lg">
              Visit {smashData.pcp.name}
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
                <div className="text-2xl font-bold text-primary mb-1">
                  {smashData.forecast.life_expectancy_years} years
                </div>
                <div className="text-sm text-muted-foreground">
                  CI: 78-87 years
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Based on 15 studies
                </div>
              </CardContent>
            </Card>

            {/* Cardiovascular Risk */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                  10-Year Cardiovascular Risk
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div
                    className={`text-2xl font-bold ${
                      Math.round(
                        smashData.forecast
                          .cardiovascular_event_10yr_probability * 100
                      ) < 5
                        ? "text-green-600"
                        : Math.round(
                            smashData.forecast
                              .cardiovascular_event_10yr_probability * 100
                          ) <= 10
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {Math.round(
                      smashData.forecast.cardiovascular_event_10yr_probability *
                        100
                    )}
                    %
                  </div>
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
                  {smashData.forecast.energy_level === "Low" && (
                    <Badge
                      variant="default"
                      className="text-lg px-4 py-2 bg-red-100 text-red-800 hover:bg-red-100"
                    >
                      Low
                    </Badge>
                  )}
                  {smashData.forecast.energy_level === "Medium" && (
                    <Badge
                      variant="default"
                      className="text-lg px-4 py-2 bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                    >
                      Medium
                    </Badge>
                  )}
                  {smashData.forecast.energy_level === "High" && (
                    <Badge
                      variant="default"
                      className="text-lg px-4 py-2 bg-green-100 text-green-800 hover:bg-green-100"
                    >
                      High
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Metabolic Disease Risk */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                  Metabolic Disease Risk
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  {smashData.forecast.metabolic_disease_risk === "Low" && (
                    <Badge
                      variant="default"
                      className="text-lg px-4 py-2 bg-green-100 text-green-800 hover:bg-green-100"
                    >
                      Low
                    </Badge>
                  )}
                  {smashData.forecast.metabolic_disease_risk === "Medium" && (
                    <Badge
                      variant="default"
                      className="text-lg px-4 py-2 bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                    >
                      Medium
                    </Badge>
                  )}
                  {smashData.forecast.metabolic_disease_risk === "High" && (
                    <Badge
                      variant="default"
                      className="text-lg px-4 py-2 bg-red-100 text-red-800 hover:bg-red-100"
                    >
                      High
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Cognitive Disease Risk */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                  Cognitive Disease Risk
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  {smashData.forecast.dementia_risk === "Low" && (
                    <Badge
                      variant="default"
                      className="text-lg px-4 py-2 bg-green-100 text-green-800 hover:bg-green-100"
                    >
                      Low
                    </Badge>
                  )}
                  {smashData.forecast.dementia_risk === "Moderate" && (
                    <Badge
                      variant="default"
                      className="text-lg px-4 py-2 bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                    >
                      Medium
                    </Badge>
                  )}
                  {smashData.forecast.dementia_risk === "High" && (
                    <Badge
                      variant="default"
                      className="text-lg px-4 py-2 bg-red-100 text-red-800 hover:bg-red-100"
                    >
                      High
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Patient Info & Image Upload */}
          <div className="space-y-4">
            <ImageUpload />

            <Card>
              <CardHeader>
                <CardTitle>Primary Care Provider</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">{smashData.pcp.name}</p>
                <p className="text-sm text-muted-foreground">
                  {smashData.pcp.clinic}
                </p>
                <p className="text-sm text-muted-foreground">
                  {smashData.pcp.address}
                </p>
                <p className="text-sm text-muted-foreground">
                  {smashData.pcp.phone}
                </p>
                <p className="text-xs text-muted-foreground">
                  Last visit: {smashData.pcp.last_visit}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Current Medications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {smashData.medications.map((med, index) => (
                  <div key={index} className="border-b pb-2 last:border-b-0">
                    <p className="font-medium text-sm">{med.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {med.dose} - {med.frequency}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Medical History</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm font-medium">Conditions:</p>
                  <ul className="text-xs text-muted-foreground list-disc pl-4">
                    {smashData.medical_history.conditions.map(
                      (condition, index) => (
                        <li key={index}>{condition}</li>
                      )
                    )}
                  </ul>
                </div>
                {smashData.allergies.length > 0 && (
                  <div>
                    <p className="text-sm font-medium">Allergies:</p>
                    <ul className="text-xs text-muted-foreground list-disc pl-4">
                      {smashData.allergies.map((allergy, index) => (
                        <li key={index}>
                          {allergy.allergen} - {allergy.reaction}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
