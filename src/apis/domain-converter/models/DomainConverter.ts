/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { DomainProperty } from './DomainProperty';
/**
 *
 * @export
 * @interface DomainConverter
 */
export interface DomainConverter {
  /**
   *
   * @type {string}
   * @memberof DomainConverter
   */
  name?: string;
  /**
   *
   * @type {Array<DomainProperty>}
   * @memberof DomainConverter
   */
  properties?: Array<DomainProperty>;
  /**
   *
   * @type {string}
   * @memberof DomainConverter
   */
  id?: string;
}
