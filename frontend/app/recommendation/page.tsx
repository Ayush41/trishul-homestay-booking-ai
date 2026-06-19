"use client";

import { useState } from "react";

import Button from "@/components/ui/button";
import Textarea from "@/components/ui/textarea";
import Toast from "@/components/ui/toast";

export default function RecommendationPage() {
  const [review, setReview] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleAnalyze = () => {
    // Temporary dummy values
    setSentiment("Positive");
    setRecommendation("Mountain View Cottage");

    // Show Toast
    setShowToast(true);
  };

  return (
    <>
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-12">
        <div className="max-w-5xl mx-auto">

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Sentiment Recommendation
          </h1>

          {/* Input Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
            <Textarea
              label="Enter Review / Text"
              placeholder="Write your review here..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />

            <div className="flex justify-center mt-6">
              <Button
                text="Analyze"
                variant="primary"
                size="lg"
                onClick={handleAnalyze}
              />
            </div>
          </div>

          {/* Sentiment Result */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Sentiment Result
            </h2>

            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg py-8">
              <p className="text-center text-2xl font-semibold text-gray-800 dark:text-white">
                {sentiment || "Waiting for Analysis"}
              </p>
            </div>
          </div>

          {/* Recommendation Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Recommended Suggestions
            </h2>

            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg py-8">
              <p className="text-center text-2xl font-semibold text-gray-800 dark:text-white">
                {recommendation || "No Recommendation Yet"}
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Toast */}
      <Toast
        message="Analysis Complete!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}