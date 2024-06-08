import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function UserNav() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full"
                >
                    <Avatar className="h-10 w-10 rounded-full p-1">
                        <AvatarImage src="/robot.png" alt="" />
                        <AvatarFallback>user</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="relative top-4 w-56"
                align="end"
                forceMount
            >
                <DropdownMenuLabel className="">
                    <div className="flex flex-col space-y-1.5">
                        <p className="text-sm font-medium leading-none">
                            Samuel Gonzalez
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                            samuel.iga03@gmail.com
                        </p>
                    </div>
                    {/* 
                        FIXME:  
                        https://www.youtube.com/watch?v=5dgYg10B9p0&list=LL&index=3&t=8819s&ab_channel=JanMarshal
                        1:00:13 - Setup Dashboard and dashboard setting + profile dropdown
                    */}
                </DropdownMenuLabel>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
