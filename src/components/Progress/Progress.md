### Standard

```jsx
import { Button } from '../Button'
intialState = { loading: false }
;<div>
  <style
    dangerouslySetInnerHTML={{
      __html: `
      .indicator {
        margin: 1rem 0 0;
      }

      .indicator_ball {
        width: 15px;
        height: 15px;
        background-color: #c62828;
        opacity: 0;
        border-radius: 100%;
        display: inline-block;
        -webkit-animation: grow 1.4s infinite ease-in-out both;
        animation: grow 1.4s infinite ease-in-out both;
      }

      .indicator_ball:nth-child(3n) {
        animation-delay: -0.32s;
      }

      .indicator_ball:nth-child(3n+1) {
        animation-delay: -0.16s;
      }

      @keyframes grow {
        0%, 80%, 100% {
          transform: scale(0);
        } 40% {
          opacity: 1;
          transform: scale(1.0);
        }
      }
    `,
    }}
  />
  <Button
    active={state.loading}
    onClick={() => {
      setState({ loading: !state.loading })
    }}
  >
    Toggle loading
  </Button>
  <Progress
    id="progress-1"
    label="Loading, please wait"
    loading={state.loading}
  >
    {({ indicatorProps }) => (
      <div {...indicatorProps} className="indicator">
        <div className="indicator_ball" />
        <div className="indicator_ball" />
        <div className="indicator_ball" />
      </div>
    )}
  </Progress>
</div>
```

### Determinate

```jsx
import { Button } from '../Button'

class Loading extends React.Component {
  constructor() {
    this.state = {
      loading: false,
      progress: 0,
    }

    this.start = this.start.bind(this)
    this.reset = this.reset.bind(this)
    this.increment = this.increment.bind(this)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  increment() {
    this.timeout = setTimeout(() => {
      const { progress } = this.state
      const newProgress = Math.min(
        progress + Math.floor(Math.random(0, 1) * 10),
        100,
      )
      this.setState({ progress: newProgress })

      if (newProgress < 100) {
        this.increment()
      }
    }, Math.floor(Math.random(0, 1) * 500))
  }

  start() {
    this.setState({ loading: true })
    this.increment()
  }

  reset() {
    clearTimeout(this.timeout)
    this.setState({ progress: 0, loading: false })
  }

  render() {
    const { loading, progress } = this.state
    return (
      <div>
        <Button
          active={loading}
          onClick={() => {
            if (!loading) {
              this.start()
            } else {
              this.reset()
            }
          }}
        >
          {!loading ? 'Start' : 'Reset'} loading
        </Button>
        <Progress id="progress-2" loading={loading} value={progress}>
          {({ indicatorProps, messageProps }) => (
            <>
              <div
                {...indicatorProps}
                style={{
                  marginTop: '1rem',
                  width: '100%',
                  height: '5px',
                  backgroundColor: '#6d6d6d',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: `${progress}%`,
                    backgroundColor: '#c62828',
                  }}
                />
              </div>
              <p {...messageProps}>
                {progress < 100 ? (
                  <span>
                    Loading <span aria-atomic="true">{progress}%</span>
                  </span>
                ) : (
                  <span>Completed</span>
                )}
              </p>
            </>
          )}
        </Progress>
      </div>
    )
  }
}
;<Loading />
```
