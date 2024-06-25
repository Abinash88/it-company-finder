"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { SelectNotePriorityTypes } from "@/Data/StaticData"
import Button from "../ui/UiItems"
import { FormLabel } from "../ui/form"

export const ComboboxDemo = ({
    onChange,
    listData,
    className,
    label
}:
    {
        onChange: (...event: any[]) => void,
        listData: SelectNotePriorityTypes[];
        className?: string
        label?: string;
    }) => {

    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <FormLabel className="mb-2">{label}</FormLabel>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    {value
                        ? listData.find((list) => list.value === value)?.label
                        : "Select priority..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className={(` p-0 max-w-3xl w-[100%] ${className}`)}>
                <Command className=" w-full max-w-2xl ">
                    <CommandList>
                        <CommandEmpty>No data found.</CommandEmpty>
                        <CommandGroup>
                            {listData.map((list) => (
                                <CommandItem
                                    key={list.value}
                                    value={list.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        onChange(currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === list.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {list.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
