import { useState } from "react";

interface VisitData {
  social_history: {
    food: string;
    exercise: {
      description: string;
      rating: number;
    };
    drugs: string;
    tobacco: string;
    alcohol: {
      description: string;
      rating: number;
    };
    sleep: {
      description: string;
      rating: number;
    };
    occupation: string;
    sexual_history: string;
  };
  medical_history: {
    conditions: string[];
    immunizations: string[];
    health_maintenance: Record<string, string>;
  };
  allergies: Array<{
    allergen: string;
    reaction: string;
  }>;
  surgical_history: Array<{
    procedure: string;
    year: number;
  }>;
  hospitalizations: Array<{
    reason: string;
    location: string;
    year: number;
  }>;
  family_history: {
    mother: string[];
    father: string[];
    siblings: string[];
  };
  medications: Array<{
    name: string;
    dose: string;
    frequency: string;
  }>;
  pcp: {
    name: string;
    clinic: string;
    address: string;
    phone: string;
    email: string;
    last_visit: string;
  };
  forecast: {
    life_expectancy_years: number;
    cardiovascular_event_10yr_probability: number;
    energy_level: string;
    metabolic_disease_risk: string;
    dementia_risk: string;
    last_updated: string;
  };
  measurements: {
    weight: number;
    height: number;
    blood_pressure: number;
    blood_sugar: number;
    cholesterol: number;
    hdl: number;
    ldl: number;
    triglycerides: number;
  };
  recommendations: {
    exercise: {
      description: string;
      rating: number;
    };
    sleep: {
      description: string;
      rating: number;
    };
    alcohol: {
      description: string;
      rating: number;
    };
  };
}

interface UseVisitAPIReturn {
  isLoading: boolean;
  improvementData: VisitData | null;
  error: string | null;
  scheduleVisit: (data: Omit<VisitData, "recommendations">) => Promise<void>;
  clearImprovementData: () => void;
}

export const useVisitAPI = (): UseVisitAPIReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [improvementData, setImprovementData] = useState<VisitData | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const scheduleVisit = async (
    data: Omit<VisitData, "recommendations">
  ): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("https://mirror-med-api.fly.dev/visit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Visit API response:", result);

      // Store the improvement data
      setImprovementData({
        ...result,
        social_history: {
          ...result.social_history,
          exercise: {
            ...result.social_history.exercise,
            rating: result.social_history.exercise.rating + 2,
          },
          sleep: {
            ...result.social_history.sleep,
            rating: result.social_history.sleep.rating + 2,
          },
          alcohol: {
            ...result.social_history.alcohol,
            rating: result.social_history.alcohol.rating - 2,
          },
        },
      });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      console.error("Error calling visit API:", err);
      setError(errorMessage);
      throw err; // Re-throw to allow component to handle it
    } finally {
      setIsLoading(false);
    }
  };

  const clearImprovementData = () => {
    setImprovementData(null);
    setError(null);
  };

  return {
    isLoading,
    improvementData,
    error,
    scheduleVisit,
    clearImprovementData,
  };
};
