"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageSuccess = () => {
  const router = useRouter();
  return (
    <div className="max-w-5xl p-4 mx-auto sm:py-15 sm:px-24">
      <div className="flex flex-col-reverse gap-2 sm:flex-row">
        <div className="flex justify-center md:min-w-[400px]">
          <Image
            src="/success.jpg"
            alt="Success"
            width={250}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl">¡Gracias por tu compra!</h1>
          <p className="my-3">
            ¡Gracias por tu compra! 🎉 Tu pedido de café ha sido procesado
            exitosamente. En menos de 48 horas recibirás tu paquete en la puerta
            de tu casa. Te enviaremos un correo de confirmación con todos los
            detalles de tu compra. ¡Disfruta de una experiencia única con
            nuestro café y esperamos verte pronto nuevamente! ☕📦
          </p>
          <Button onClick={()=> router.push(`/`)}>Volver a la tienda</Button>
        </div>
      </div>
    </div>
  );
};

export default PageSuccess;
