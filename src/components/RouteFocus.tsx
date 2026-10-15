import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

export default function RouteFocus() {
  const { pathname, hash } = useLocation()
  const previousPath = useRef(pathname)

  useEffect(() => {
    if (previousPath.current !== pathname) {
      document.getElementById('main-content')?.focus({ preventScroll: true })
      window.scrollTo(0, 0)
      previousPath.current = pathname
    }

    if (hash === '#about') {
      document.getElementById('about')?.scrollIntoView()
    }
  }, [pathname, hash])

  return null
}
