"use client";

import { db } from "@/database";
import { Dialog, DialogHeader, DialogContent, DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useServiceParams } from "@/hooks/use-service-params";
import { useEffect, useState } from "react";
import { generateWhatsAppLink } from "@/utils/generate-whatsapp-link";
import Link from "next/link";

export function ServiceDetailsModal() {
  const { params, setParam } = useServiceParams();
  const serviceId = params.serviceId ? Number(params.serviceId) : null;

  const [service, setService] = useState<{
    id: number;
    name: string;
    description: string;
    image: string;
  } | null>(null);

  useEffect(() => {
    const fetchService = async () => {
      if (serviceId) {
        setService(await db.services[serviceId - 1]);
      } else {
        setService(null);
      }
    };
    fetchService();
  }, [serviceId]);

  if (!service) {
    return null;
  }

  const sendMessageLink = generateWhatsAppLink(
    `Olá, gostaria de falar mais sobre ${service.name}.`
  );

  return (
    <Dialog
      open={!!serviceId}
      onOpenChange={() => setParam({ serviceId: null })}
    >
      <DialogContent className="w-3/5">
        <DialogHeader>
          <DialogTitle className="hidden">{service.name}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-8 w-full">
          <div className="flex flex-col w-full gap-4">
            <Label className="text-2xl font-bold text-balance">
              {service.name}
            </Label>
            <p>{service.description}</p>
            <Button
              asChild
              className="bg-primary/5 hover:bg-primary/10 text-primary font-semibold text-md border-primary"
            >
              <Link target="_blank" href={sendMessageLink}>
                <img src="/icons/whatsapp.svg" alt="logo" className="size-5" />
                Fale com especialista
              </Link>
            </Button>
          </div>
          <div className="flex flex-col w-full gap-4">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full rounded-lg overflow-hidden object-cover object-bottom-left"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
