"use client";

import { db } from "@/database";
import { Dialog, DialogHeader, DialogContent, DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useServiceParams } from "@/hooks/use-service-params";
import { useEffect, useState } from "react";

export function ServiceDetailsModal() {
  const { params, setParam } = useServiceParams();
  const serviceId = params.serviceId ? Number(params.serviceId) : null;

  const [service, setService] = useState<{
    id: number;
    name: string;
    description: string;
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
            <Button className="bg-primary/5 hover:bg-primary/10 text-primary font-semibold text-md border-primary w-1/3">
              <img src="/icons/whatsapp.svg" alt="logo" className="size-5" />
              Tire suas dúvidas
            </Button>
          </div>
          <div className="flex flex-col w-full gap-4">
            <div className="w-full h-auto aspect-square bg-gray-200 rounded-lg"></div>
          </div>
          <div className="col-span-2 w-full">
            <div className="grid grid-cols-5 w-full gap-8">
              <div className="bg-gray-200 w-full h-auto aspect-square rounded-lg"></div>
              <div className="bg-gray-200 w-full h-auto aspect-square rounded-lg"></div>
              <div className="bg-gray-200 w-full h-auto aspect-square rounded-lg"></div>
              <div className="bg-gray-200 w-full h-auto aspect-square rounded-lg"></div>
              <div className="bg-gray-200 w-full h-auto aspect-square rounded-lg"></div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
