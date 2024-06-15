import { useState } from 'react';
import { Button } from '~/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '~/components/ui/sheet';

export default function SheetPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid grid-cols-2 gap-3">
      <Button onClick={() => setIsOpen(true)}>Open Sheet</Button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
