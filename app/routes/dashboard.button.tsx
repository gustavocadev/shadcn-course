import {
  ChevronRightIcon,
  EnvelopeOpenIcon,
  ReloadIcon,
} from '@radix-ui/react-icons';
import { Button } from '~/components/ui/button';

export default function DashboardAccordion() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>Default</Button>

      <Button variant="destructive">Destructive</Button>

      <Button variant="ghost">Success</Button>

      <Button variant="link">Ghost</Button>

      <Button variant="outline">outline</Button>

      <Button variant="secondary">secondary</Button>

      <Button
        onClick={() => {
          console.log('Hello, world!');
        }}
        capitalize
      >
        click me
      </Button>

      <Button variant="success">Success</Button>

      <Button variant="outline" size="icon">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>

      <Button disabled>
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>

      <Button>
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
      </Button>
    </div>
  );
}
