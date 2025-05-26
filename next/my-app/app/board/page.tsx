import FolderDropdown from "@/components/FolderDropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";  
import { Textarea } from "@/components/ui/textarea";


export default function Board() {

    return<>
        <div className="flex gap-3">
            <FolderDropdown />
            <Input type="text" placeholder="title..."></Input>
        </div>
        <div>
            <Textarea rows={24} placeholder="content..."></Textarea>

            <div className='flex justify-around'>
                <Button>Cancel</Button>
                <Button variant='destructive'>Remove</Button>
                <Button variant="primary">Save</Button>
            </div>
        </div>
    </>;
}