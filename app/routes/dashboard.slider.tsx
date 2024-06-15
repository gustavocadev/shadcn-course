import { Slider } from '~/components/ui/slider';
import { useState } from 'react';

export default function SliderPage() {
  const [sliderValue, setSliderValue] = useState(10);
  const [rangeValue, setRangeValue] = useState([10, 20]);

  return (
    <div className="flex flex-col gap-3">
      <span>Slider Value: {sliderValue}</span>
      <Slider
        defaultValue={[sliderValue]}
        max={100}
        step={5}
        onValueChange={(value) => setSliderValue(value[0])}
      />

      <span>Slider Value: {JSON.stringify(rangeValue)}</span>
      <Slider
        defaultValue={rangeValue}
        max={100}
        step={5}
        onValueChange={setRangeValue}
      />
    </div>
  );
}
