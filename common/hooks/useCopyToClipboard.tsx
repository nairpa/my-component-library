import { useState } from "react"

export const useCopyToClipboard = () => {
    const [ isCopied, setIsCopied ] = useState(false);
   
    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setIsCopied(true);
            return isCopied
        } catch(err) {
            setIsCopied(false);
            return isCopied
        }
    }
    
    return [ handleCopy ]
}