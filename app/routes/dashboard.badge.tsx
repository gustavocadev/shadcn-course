import { Badge } from '~/components/ui/badge';

export default function BadgePage() {
  return (
    <div className="flex gap-4">
      <Badge>Badge</Badge>
      <Badge variant="destructive">Badge</Badge>

      <Badge variant="secondary" capitalize>
        badge
      </Badge>
      <Badge variant="outline" capitalize>
        badge
      </Badge>
      <Badge variant="info" capitalize>
        badge
      </Badge>
      <Badge variant="success">Badge</Badge>
    </div>
  );
}
