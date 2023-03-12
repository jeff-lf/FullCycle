FROM golang as builder
WORKDIR /go/src
COPY *.go .
RUN go build fullcycle.go

FROM scratch
WORKDIR /go/src
COPY --from=builder /go/src/fullcycle /go/src/fullcycle
CMD [ "/go/src/fullcycle" ]