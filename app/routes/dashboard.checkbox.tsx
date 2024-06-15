import { useState } from 'react';
import { Checkbox } from '~/components/ui/checkbox';

export default function CheckboxPage() {
  const [terms, setTerms] = useState(false);
  return (
    <div>
      <div className="items-top flex space-x-2">
        <Checkbox
          id="terms1"
          checked={terms}
          onCheckedChange={(checked: boolean) => setTerms(checked)}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
          <p className="text-sm text-muted-foreground">
            You agree to our Terms of Service and Privacy Policy.
          </p>
          {terms ? (
            <p>
              <span className="text-sm text-green-600">You accepted</span> the
              terms and conditions.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
