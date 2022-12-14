import { useEffect } from "react";

export const useTitle = (dynamicTitle) => {
    useEffect(() => {
        document.title = `Sheikh riyadh ${dynamicTitle}`
    }, [dynamicTitle])
}