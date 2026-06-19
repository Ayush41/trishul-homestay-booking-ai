import Button from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white py-10 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold">
            Profile
          </h1>

          
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            View and manage your profile information
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white dark:bg-gray-800 dark:text-white rounded-2xl shadow-md p-8">

          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-4xl">
              👤
            </div>

            <h2 className="text-2xl font-bold mt-4">
              Nupur Dimri
            </h2>

            <p className="text-gray-500 dark:text-gray-300">
              @nupur123
            </p>
          </div>

          <div className="space-y-4">
            <p><strong>Email:</strong> nupur@example.com</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Address:</strong> Dehradun, Uttarakhand</p>
          </div>

          <div className="mt-8">
            <Button text="Edit Profile" />
          </div>

        </div>
      </div>
    </main>
  );
}