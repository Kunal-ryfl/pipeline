import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex bg-slate-900 text-white flex-col h-dvh  justify-center items-center gap-3">
      <p >App running perfectly on Ec2 instance</p>
      <p className=" border   p-2">Make changes to run CI/CD</p>
    </div>  );
}
