import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import close from '@/assets/close.svg'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Label } from '@radix-ui/react-label'
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"


export default function Reminder() {
    const [time, setTime] = useState()
    const [name, setName] = useState('')
    const days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const [selectedDays, setSelectedDays] = useState<string[]>([])

    const handleSubmit = () => {
        console.log(name, time, selectedDays)
    }
    return (
        <div>
            <Carousel className="w-full max-w-xs mx-auto">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card className="w-[300px] bg-zinc-100">
                                    <CardHeader>
                                        <CardTitle>Medicine Name</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <form>
                                            <div className="grid w-full items-center gap-4">
                                                <div className="flex flex-col space-y-1.5">
                                                    <Input id="name" type="text" onChange={(e: any) => setName(e.target.value)} placeholder="Medicine Name" />
                                                    <span className="mb-2">
                                                        <Label htmlFor="name">Time</Label>
                                                        <Input id="name" type="time" onChange={(e: any) => setTime(e.target.value)} placeholder="Name of your project" />
                                                    </span>
                                                    <Label htmlFor="name">Week Days</Label>
                                                    <Popover>
                                                        <PopoverTrigger className="py-[6px] px-4 bg-slate-900 rounded-md text-white">Select Days</PopoverTrigger>
                                                        <PopoverContent className="bg-slate-900 text-slate-200 flex-col px-1">
                                                            {days.map((day: string) => {
                                                                return (
                                                                    <Button value={day} onClick={(e: any) => {
                                                                        setSelectedDays((prev) => [...prev, e.target.value])
                                                                    }
                                                                    } className="hover:bg-slate-700 cursor-pointer text-start justify-start w-full px-3 py-[6px] rounded-sm" > {day}</Button>
                                                                )
                                                            })}
                                                        </PopoverContent>
                                                    </Popover>
                                                    <div className="flex flex-wrap">
                                                        {selectedDays ? selectedDays.map((day: string) => {
                                                            return (
                                                                <p className="px-2 mx-[3px] my-[2px] py-1 rounded-lg bg-slate-900 flex items-center text-white w-fit text-center text-sm">{day}<img
                                                                    onClick={() => {
                                                                        const days = selectedDays.filter(x => x != day)
                                                                        setSelectedDays((prev: any) => [...days])
                                                                    }} className="h-fit ml-[1px] cursor-pointer w-4" src={close} /></p>
                                                            )
                                                        }) : null}
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                        <Button variant="destructive">Delete</Button>
                                        <Button onClick={handleSubmit}>New</Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div >
    )
}
