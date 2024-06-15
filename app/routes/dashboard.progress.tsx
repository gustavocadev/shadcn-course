import { useEffect, useState } from 'react';
import { Progress } from '~/components/ui/progress';
import { cn } from '~/lib/utils';

export default function ProgressPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
        }
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Progress
        value={progress}
        indicatorColor={cn({
          'bg-primary': progress < 50,
          'bg-purple-500': progress >= 50 && progress < 80,
          'bg-orange-500': progress >= 80 && progress < 100,
        })}
      />
    </>
  );
}
