'use client';

import { ChevronDown } from 'lucide-react';
import difficulties from '../data/difficulties.json';
import { useState } from 'react';
import * as Dropdown from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';

function DropdownDifficulties({ onChange }) {
  const difficulty = ['All', ...difficulties.map((d) => d.name)];
  const [difficultyFilter, setDifficultyFilter] = useState(difficulty[0]);

  function clickHandle(diff) {
    setDifficultyFilter(diff);

    onChange(diff);
  }

  return (
    <Dropdown.Root>
      <Dropdown.Trigger className="flex w-52 cursor-default items-center justify-between gap-10 border-4 border-black bg-white py-2 px-3 text-left text-lg focus:outline-none focus-visible:ring-0">
        <span className="block truncate">{difficultyFilter}</span>
        <ChevronDown />
      </Dropdown.Trigger>
      <Dropdown.Portal>
        <Dropdown.Content
          align="start"
          className="z-50 mt-1 w-52 border-4 border-black bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          {difficulty.map((diff, i) => (
            <Dropdown.Item
              key={i}
              className={clsx(
                'hover:bg-brand/20 focus:bg-brand/50 relative cursor-default select-none truncate py-2 px-4 text-lg text-black/80 focus:outline-none',
                diff === difficultyFilter && 'bg-brand/50'
              )}
              onClick={() => clickHandle(diff)}
            >
              {diff}
            </Dropdown.Item>
          ))}
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  );
}

export default DropdownDifficulties;
