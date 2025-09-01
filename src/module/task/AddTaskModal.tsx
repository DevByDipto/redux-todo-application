import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import type { ITask } from "@/type"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select"
import { useForm } from "react-hook-form"
import { Link } from "react-router"
// full code ta buja ??
export function AddTaskModal() {

   
    const form = useForm<ITask>()

    const onSubmit = (data:ITask)=>{
        console.log(data);
        
    }
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button >Add Task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
        
          </DialogHeader>
          <Form {...form}>  {/*... from keno korlam  */}
           
 <form onSubmit={form.handleSubmit(onSubmit)}>
{/* title input */}
     <FormField
    control={form.control} //keno korlam
    name="title"
    render={({field}) => (
      <FormItem>
         <FormLabel>title</FormLabel>
        <FormControl>
        <Input {...field} value={field.value || ""} />
        </FormControl>
        <FormDescription className="sr-only">fill up the form</FormDescription> 
        {/* sr only kii kaj kore? */}
        <FormMessage />
      </FormItem>
    )}
  />
  {/* description input */}
     <FormField
    control={form.control} //keno korlam
    name="description"
    render={({field}) => (
      <FormItem>
        <FormLabel>description</FormLabel>
        <FormControl>
        <Textarea  {...field} value={field.value || ""} />
        </FormControl>
        <FormDescription className="sr-only">fill up the form</FormDescription> 
        {/* sr only kii kaj kore? */}
        <FormMessage />
      </FormItem>
    )}
  />
  {/* selector input */}
   <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Priority</FormLabel>
              <Select onValueChange={field.onChange} 
              value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified Priority to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
                            
            </FormItem>
          )}
        />
        {/* date select field */}
         <FormField
          control={form.control}
          name="dueDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date("1900-01-01")
                    // }
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

          <DialogFooter >
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
 </form>
</Form>
        </DialogContent>
      </form>
    </Dialog>
  )
}
