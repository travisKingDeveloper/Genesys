import React from 'react';
import { name } from 'shared/utils/formatters';

export default function() {
    return (
        <div>
            <button>
                {name('Travis', 'King')}
            </button>
        </div>
    )
}