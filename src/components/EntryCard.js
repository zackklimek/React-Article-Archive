import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import classes from './EntryCard.module.css'

const EntryCard = (props) => {
    // indicates something has been entered in the filter bar
    const tagsTrue = props.searchTags.length > 0;
    const applyOutline = tagsTrue
        ? (props.searchTags.some((tag) => {
            return (
                props.entry.tags.includes(tag)
                ||
                (props.entry.title.includes(tag)
                &&	tag.length > 2) ||
                (
                	props.entry.title.includes(tag) &&
                	tag.length > 2)
            );
        }))
        : false;                                

    return (
        <Col key={props.entry.datetime} xs="12" sm="6" lg="4" xl="3" className="my-3">
            <Card className={tagsTrue 
                ? applyOutline 
                    ? classes.articleCardTag 
                    : classes.articleCard
                : classes.articleCard
            }
            >
                <Row className={classes.titleDiv}>
                    <Col className="col-sm-9">
                        <a className="mx-3" href={props.entry.url} target="_blank" rel="noopener noreferrer">
                            <p className={classes.linkText}>{props.entry.title}</p>
                        </a>
                    </Col>
                    <Col className="col-sm-3">
                        <p className={classes.dateText}>#{props.entry.datetime.substring(5,10)}</p>
                    </Col>
                </Row>
                <p>{props.entry.note}</p>
                <hr />
                <p> {props.entry.tags.join(" | ")}</p>
                <p className={classes.removeText} onClick={() => props.onEntryClick(props.entry)}>Edit</p>
                <p className={classes.removeText}
                onClick={() => {
                    props.removeArticleHandler(props.entry.datetime)
                }}>Remove</p>
            </Card>
        </Col>
    )
}

export default EntryCard;
