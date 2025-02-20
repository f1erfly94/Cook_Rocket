'use client';
import React from 'react';
import {Search} from "lucide-react";
import {cn} from "@/lib/utils";
import {useClickAway} from 'react-use';

interface Props {
    className?: string;
}

const customSearch: React.FC<Props> = ({className}) => {

    const [focused, setFocused] = React.useState<boolean>(false);
    const ref = React.useRef(null);


    useClickAway(ref, () => {
        setFocused(false);
    });
    //test
    // useDebounce(
    //     async () => {
    //         try {
    //             const response = await Api.products.search(searchQuery);
    //             setProducts(response);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     },
    //     250,
    //     [searchQuery],
    // );
    return (
        <>
            {focused &&  <div className="fixed top-0 left-0 bottom-0  right-0 bg-black/50 z-30"/>}

                <div
                    ref={ref}
                    className={cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30' , className)}>
                    <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400"/>
                    <input
                        className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
                        type="text"
                        placeholder="Шукаємо вкусняшки..."
                        onFocus={() => setFocused(true)}
                        onChange={(e) => {e.target.value}}
                    />
                </div>
        </>
    );
};

export default customSearch;
