import SendMailForm from "@/components/SendMailForm";



export default function Home() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Feedback</h1>
      <SendMailForm />
    </div>
  );
}
