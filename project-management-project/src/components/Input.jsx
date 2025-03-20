export default function Input({ label, textarea, ...props }, ref) {   
    const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none foucs:border-stone-600"
    return ( 
        <p className="flex flex-col my-4 gap-1">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {textarea ? <textarea ref={ref} className={classes}  {...props} /> : 
            <input ref={ref} className={classes} {...props} />}   
        </p>
    )
}