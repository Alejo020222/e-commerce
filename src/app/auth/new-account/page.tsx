import { titleFont } from "@/config/font";
import Link from "next/link";

export default function () {
  return (
    <div className="flex flex-col min-h-screen pt-16 sm:pt-32">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>Nueva Cuenta</h1>

      <div className="flex flex-col">
        <label htmlFor="text">Nombre Completo</label>
        <input
          className="px-5 py-2 border bg-gray-100 rounded mb-5"
          type="email"
        />

        <label htmlFor="email">Correo</label>
        <input
          className="px-5 py-2 border bg-gray-100 rounded mb-5"
          type="email"
        />

        <label htmlFor="email">Contraseña</label>
        <input
          className="px-5 py-2 border bg-gray-100 rounded mb-5"
          type="email"
        />

        <button className="btn-primary">Ingresar</button>
        <Link href="/auth/login" className=" text-center"></Link>
      </div>
    </div>
  );
}
